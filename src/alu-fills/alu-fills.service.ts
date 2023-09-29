import { Injectable } from '@nestjs/common';
import { CreateAluFillDto } from './dto/create-alu-fill.dto';
import { UpdateAluFillDto } from './dto/update-alu-fill.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluFillsService {
  async create(createAluFillDto: CreateAluFillDto, userId: string) {
    return await prisma.cmsAluFills.create({
      data: {
        name: createAluFillDto.name,
        productCode: createAluFillDto.productCode,
        foilAvailable: createAluFillDto.foilAvailable,
        pricePerSquareMeter: createAluFillDto.pricePerSquareMeter,
        priceIncrease: createAluFillDto.priceIncrease,
        parent: createAluFillDto.parent?.id
          ? {
              connect: {
                id: createAluFillDto.parent?.id,
              },
            }
          : undefined,
        cmsAluFrameTypes: {
          connect: createAluFillDto.frameTypes.map((frameType) => ({
            id: frameType,
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
  }

  async findAll() {
    return await prisma.cmsAluFills.findMany({
      where: { isActive: true },
      include: {
        parent: true,
        children: {
          include: {
            cmsAluFrameTypes: true,
          },
          where: {
            isActive: true,
          },
        },
        cmsAluFrameTypes: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluFills.findUnique({
      where: { id: id },
      include: {
        parent: true,
        children: {
          include: {
            cmsAluFrameTypes: true,
          },
          where: {
            isActive: true,
          },
        },
        cmsAluFrameTypes: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  async update(id: string, updateAluFillDto: UpdateAluFillDto, userId: string) {
    await prisma.cmsAluFills.update({
      where: { id: id },
      data: {
        cmsAluFrameTypes: {
          set: [],
        },
      },
    });

    return await prisma.cmsAluFills.update({
      where: {
        id: id,
      },
      data: {
        name: updateAluFillDto.name,
        productCode: updateAluFillDto.productCode,
        foilAvailable: updateAluFillDto.foilAvailable,
        pricePerSquareMeter: updateAluFillDto.pricePerSquareMeter,
        priceIncrease: updateAluFillDto.priceIncrease,
        modified: new Date(),
        parent: updateAluFillDto.parent?.id
          ? {
              connect: {
                id: updateAluFillDto.parent?.id,
              },
            }
          : undefined,
        cmsAluFrameTypes: {
          connect: updateAluFillDto.frameTypes.map((frameType) => ({
            id: frameType,
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
    return await prisma.cmsAluFills.update({
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
