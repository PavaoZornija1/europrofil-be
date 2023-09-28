import { Injectable } from '@nestjs/common';
import { CreateFillDto } from './dto/create-fill.dto';
import { UpdateFillDto } from './dto/update-fill.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FillsService {
  async create(createFillDto: CreateFillDto) {
    return await prisma.cmsFills.create({
      data: {
        name: createFillDto.name,
        productCode: createFillDto.productCode,
        requiresPvcProfile: createFillDto.requiresPvcProfile,
        requiresThinning: createFillDto.requiresThinning,
        customNameAllowed: createFillDto.customNameAllowed,
        foilAvailable: createFillDto.foilAvailable,
        pricePerMSquare: createFillDto.pricePerMSquare,
        cmsMechanisms: {
          connect: createFillDto.mechanism.map((mechanism) => ({
            id: mechanism,
          })),
        },
        parent: createFillDto.parent
          ? {
              connect: {
                id: createFillDto.parent,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsFills.findMany({
      where: { isActive: true },
      include: {
        parent: {
          include: {
            cmsMechanisms: {
              where: {
                isActive: true,
              },
            },
          },
          where: {
            isActive: true,
          },
        },
        children: {
          include: {
            cmsMechanisms: {
              where: {
                isActive: true,
              },
            },
          },
          where: {
            isActive: true,
          },
        },
        cmsMechanisms: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsFills.findUnique({
      where: { id: id },
      include: {
        parent: {
          where: {
            isActive: true,
          },
        },
        children: {
          where: {
            isActive: true,
          },
        },
        cmsMechanisms: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  async update(id: string, updateFillDto: UpdateFillDto) {
    await prisma.cmsFills.update({
      where: { id: id },
      data: {
        cmsMechanisms: {
          set: [],
        },
      },
    });

    return await prisma.cmsFills.update({
      where: {
        id: id,
      },
      data: {
        name: updateFillDto.name,
        productCode: updateFillDto.productCode,
        modified: new Date(),
        requiresPvcProfile: updateFillDto.requiresPvcProfile,
        requiresThinning: updateFillDto.requiresThinning,
        customNameAllowed: updateFillDto.customNameAllowed,
        foilAvailable: updateFillDto.foilAvailable,
        pricePerMSquare: updateFillDto.pricePerMSquare,
        cmsMechanisms: {
          connect: updateFillDto.mechanism.map((mechanism) => ({
            id: mechanism,
          })),
        },
        parent: updateFillDto.parent
          ? {
              connect: {
                id: updateFillDto.parent,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsFills.update({
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
