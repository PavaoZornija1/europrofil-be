import { Injectable } from '@nestjs/common';
import { CreateHorizontalProfileDto } from './dto/create-horizontal-profile.dto';
import { UpdateHorizontalProfileDto } from './dto/update-horizontal-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HorizontalProfilesService {
  async create(createHorizontalProfileDto: CreateHorizontalProfileDto) {
    return await prisma.cmsHorizontalProfiles.create({
      data: {
        name: createHorizontalProfileDto.name,
        constantsGlassGap: createHorizontalProfileDto.constantsGlassGap,
        constantsThickness: createHorizontalProfileDto.constantsThickness,
        constantsWoodGap: createHorizontalProfileDto.constantsWoodGap,
        cmsMechanisms: createHorizontalProfileDto.mechanism?.id
          ? {
              connect: {
                id: createHorizontalProfileDto.mechanism?.id,
              },
            }
          : undefined,
      },
    });
  }

  findAll() {
    return prisma.cmsHorizontalProfiles.findMany({ where: { isActive: true } });
  }

  findOne(id: string) {
    return prisma.cmsHorizontalProfiles.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateHorizontalProfileDto: UpdateHorizontalProfileDto,
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
        constantsGlassGap: updateHorizontalProfileDto.constantsGlassGap,
        constantsThickness: updateHorizontalProfileDto.constantsThickness,
        constantsWoodGap: updateHorizontalProfileDto.constantsWoodGap,
        cmsMechanisms: updateHorizontalProfileDto.mechanism?.id
          ? {
              connect: {
                id: updateHorizontalProfileDto.mechanism?.id,
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
