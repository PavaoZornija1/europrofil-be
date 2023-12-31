import { Injectable } from '@nestjs/common';
import { CreateFoilDto } from './dto/create-foil.dto';
import { UpdateFoilDto } from './dto/update-foil.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FoilsService {
  async create(createFoilDto: CreateFoilDto, userId: string) {
    return await prisma.cmsFoils.create({
      data: {
        name: createFoilDto.name,
        productCode: createFoilDto.productCode,
        colorCode: createFoilDto.colorCode,
        ralCode: createFoilDto.ralCode,
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
    return await prisma.cmsFoils.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsFoils.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updateFoilDto: UpdateFoilDto, userId: string) {
    return await prisma.cmsFoils.update({
      where: {
        id: id,
      },
      data: {
        name: updateFoilDto.name,
        productCode: updateFoilDto.productCode,
        colorCode: updateFoilDto.colorCode,
        ralCode: updateFoilDto.ralCode,
        modified: new Date(),
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
    return await prisma.cmsFoils.update({
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
