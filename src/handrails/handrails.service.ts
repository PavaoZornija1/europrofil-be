import { Injectable } from '@nestjs/common';
import { CreateHandrailDto } from './dto/create-handrail.dto';
import { UpdateHandrailDto } from './dto/update-handrail.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HandrailsService {
  async create(
    createHandrailDto: CreateHandrailDto,
    userId: string,
    files: any,
  ) {
    const newHandrail = await prisma.cmsHandrails.create({
      data: {
        name: createHandrailDto.name,
        roundingSteps: createHandrailDto.roundingSteps,
        doorWidth: createHandrailDto.doorWidth,
        profileLength: createHandrailDto.profileLength,
        fillWidthGlass: createHandrailDto.fillWidthGlass,
        fillWidthWood: createHandrailDto.fillWidthWood,
        cmsMechanisms: {
          connect: createHandrailDto.mechanisms.map((mechanism) => ({
            id: mechanism,
          })),
        },
        cmsDoorMechanisms: {
          connect: createHandrailDto.doorMechanisms.map((doorMechanism) => ({
            id: doorMechanism,
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
          path: `public/uploads/handrail_${pic[0].originalname}`,
          mechanismPic: {
            connect: {
              id: newHandrail.id,
            },
          },
        },
      });
    }

    return newHandrail;
  }

  async findAll() {
    return await prisma.cmsHandrails.findMany({
      where: { isActive: true },
      include: {
        cmsDoorMechanisms: true,
        cmsMechanisms: true,
        cmsSupportedDecorations: true,
        cmsHandrailEndings: true,
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsHandrails.findUnique({
      where: { id: id },
      include: {
        cmsDoorMechanisms: true,
        cmsMechanisms: true,
        cmsSupportedDecorations: true,
        cmsHandrailEndings: true,
      },
    });
  }

  async update(
    id: string,
    updateHandrailDto: UpdateHandrailDto,
    userId: string,
  ) {
    await prisma.cmsHandrails.update({
      where: { id: id },
      data: {
        cmsMechanisms: {
          set: [],
        },
        cmsDoorMechanisms: {
          set: [],
        },
      },
    });

    return await prisma.cmsHandrails.update({
      where: {
        id: id,
      },
      data: {
        name: updateHandrailDto.name,
        modified: new Date(),
        roundingSteps: updateHandrailDto.roundingSteps,
        doorWidth: updateHandrailDto.doorWidth,
        profileLength: updateHandrailDto.profileLength,
        fillWidthGlass: updateHandrailDto.fillWidthGlass,
        fillWidthWood: updateHandrailDto.fillWidthWood,
        cmsMechanisms: {
          connect: updateHandrailDto.mechanisms.map((mechanism) => ({
            id: mechanism,
          })),
        },
        cmsDoorMechanisms: {
          connect: updateHandrailDto.doorMechanisms.map((doorMechanism) => ({
            id: doorMechanism,
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
    return await prisma.cmsHandrails.update({
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
