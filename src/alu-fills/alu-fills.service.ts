import { Injectable } from '@nestjs/common';
import { CreateAluFillDto } from './dto/create-alu-fill.dto';
import { UpdateAluFillDto } from './dto/update-alu-fill.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluFillsService {
  async create(createAluFillDto: CreateAluFillDto) {
    console.log(createAluFillDto, 'adasd');
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
          connect: createAluFillDto.frameTypes,
        },
      },
    });
  }

  async findAll() {
    return await prisma.cmsAluFills.findMany({
      where: { isActive: true },
      include: {
        parent: true,
        children: true,
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluFills.findUnique({
      where: { id: id },
      include: {
        parent: true,
        children: true,
      },
    });
  }

  async update(id: string, updateAluFillDto: UpdateAluFillDto) {
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
        parent: updateAluFillDto.parent?.id
          ? {
              connect: {
                id: updateAluFillDto.parent?.id,
              },
            }
          : undefined,
        cmsAluFrameTypes: {
          connect: updateAluFillDto.frameTypes,
        },
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
