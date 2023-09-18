import { Injectable } from '@nestjs/common';
import { CreateAluFillDto } from './dto/create-alu-fill.dto';
import { UpdateAluFillDto } from './dto/update-alu-fill.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluFillsService {
  async create(createAluFillDto: CreateAluFillDto) {
    return await prisma.cmsAluFills.create({
      data: {
        name: createAluFillDto.name,
        productCode: createAluFillDto.productCode,
        foilAvailable: createAluFillDto.foilAvailable,
        pricePerSquareMeter: createAluFillDto.pricePerSquareMeter,
        priceIncrease: createAluFillDto.priceIncrease,
        parent: {
          connect: {
            id: createAluFillDto.parent?.id,
          },
        },
      },
    });
  }

  async findAll() {
    return await prisma.cmsAluFills.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsAluFills.findUnique({
      where: { id: id },
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
        parent: {
          connect: {
            id: updateAluFillDto.parent?.id,
          },
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
