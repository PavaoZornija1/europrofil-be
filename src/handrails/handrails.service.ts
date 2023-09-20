import { Injectable } from '@nestjs/common';
import { CreateHandrailDto } from './dto/create-handrail.dto';
import { UpdateHandrailDto } from './dto/update-handrail.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HandrailsService {
  async create(createHandrailDto: CreateHandrailDto) {
    return await prisma.cmsHandrails.create({
      data: {
        name: createHandrailDto.name,
        roundingSteps: createHandrailDto.roundingSteps,
        doorWidth: createHandrailDto.doorWidth,
        profileLength: createHandrailDto.profileLength,
        fillWidthGlass: createHandrailDto.fillWidthGlass,
        fillWidthWood: createHandrailDto.fillWidthWood,
        cmsMechanisms: createHandrailDto.mechanism?.id
          ? {
              connect: {
                id: createHandrailDto.mechanism?.id,
              },
            }
          : undefined,
        cmsDoorMechanisms: createHandrailDto.mechanism?.id
          ? {
              connect: {
                id: createHandrailDto.mechanism?.id,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsHandrails.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsHandrails.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updateHandrailDto: UpdateHandrailDto) {
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
        roundingSteps: updateHandrailDto.roundingSteps,
        doorWidth: updateHandrailDto.doorWidth,
        profileLength: updateHandrailDto.profileLength,
        fillWidthGlass: updateHandrailDto.fillWidthGlass,
        fillWidthWood: updateHandrailDto.fillWidthWood,
        cmsMechanisms: updateHandrailDto.mechanism?.id
          ? {
              connect: {
                id: updateHandrailDto.mechanism?.id,
              },
            }
          : undefined,
        cmsDoorMechanisms: updateHandrailDto.mechanism?.id
          ? {
              connect: {
                id: updateHandrailDto.mechanism?.id,
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
