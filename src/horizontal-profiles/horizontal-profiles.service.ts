import { Injectable } from '@nestjs/common';
import { CreateHorizontalProfileDto } from './dto/create-horizontal-profile.dto';
import { UpdateHorizontalProfileDto } from './dto/update-horizontal-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// horizontalProfilePic
@Injectable()
export class HorizontalProfilesService {
  async create(
    createHorizontalProfileDto: CreateHorizontalProfileDto,
    userId: string,
    files: any,
  ) {
    const newHorizontalProfile = await prisma.cmsHorizontalProfiles.create({
      data: {
        name: createHorizontalProfileDto.name,
        constantsGlassGap: createHorizontalProfileDto.constantsGlassGap,
        constantsThickness: createHorizontalProfileDto.constantsThickness,
        constantsWoodGap: createHorizontalProfileDto.constantsWoodGap,
        cmsMechanisms: {
          connect: createHorizontalProfileDto.mechanisms.map((mechanism) => ({
            id: mechanism,
          })),
        },
        createdBy: userId
          ? {
              connect: {
                id: userId,
              },
            }
          : undefined,
      },
    });

    const { pic } = files;
    if (pic) {
      const newPic = await prisma.files.create({
        data: {
          mimetype: pic.mimetype,
          path: `public/uploads/handrail_prof_${pic[0].originalname}`,
          horizontalProfilePic: {
            connect: {
              id: newHorizontalProfile.id,
            },
          },
        },
      });
    }

    return newHorizontalProfile;
  }

  findAll() {
    return prisma.cmsHorizontalProfiles.findMany({
      where: { isActive: true },
      include: {
        cmsSupportedProfiles: true,
        cmsMechanisms: true,
        pic: true,
      },
    });
  }

  findOne(id: string) {
    return prisma.cmsHorizontalProfiles.findUnique({
      where: { id: id },
      include: {
        cmsSupportedProfiles: true,
        cmsMechanisms: true,
        pic: true,
      },
    });
  }

  async update(
    id: string,
    updateHorizontalProfileDto: UpdateHorizontalProfileDto,
    userId: string,
  ) {
    await prisma.cmsHorizontalProfiles.update({
      where: { id: id },
      data: {
        cmsMechanisms: {
          set: [],
        },
      },
    });

    return await prisma.cmsHorizontalProfiles.update({
      where: {
        id: id,
      },
      data: {
        name: updateHorizontalProfileDto.name,
        modified: new Date(),
        constantsGlassGap: updateHorizontalProfileDto.constantsGlassGap,
        constantsThickness: updateHorizontalProfileDto.constantsThickness,
        constantsWoodGap: updateHorizontalProfileDto.constantsWoodGap,
        cmsMechanisms: {
          connect: updateHorizontalProfileDto.mechanisms.map((mechanism) => ({
            id: mechanism,
          })),
        },
        modifiedBy: userId
          ? {
              connect: {
                id: userId,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsHorizontalProfiles.update({
      where: {
        id: id,
      },
      data: {
        isActive: false,
        isDeleted: true,
        deleted: new Date(),
      },
    });
  }
}
