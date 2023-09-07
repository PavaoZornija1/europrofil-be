import { Injectable } from '@nestjs/common';
import { CreateFoilDto } from './dto/create-foil.dto';
import { UpdateFoilDto } from './dto/update-foil.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FoilsService {
  create(createFoilDto: CreateFoilDto) {
    return 'This action adds a new foil';
  }

  async findAll() {
    return await prisma.cmsFoils.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsFoils.findUnique({
      where: { id: id, isActive: true },
    });
  }

  async update(id: string, updateFoilDto: UpdateFoilDto) {
    return await prisma.cmsFoils.update({
      where: {
        id: id,
      },
      data: {
        name: updateFoilDto.name,
        productCode: updateFoilDto.productCode,
        colorCode: updateFoilDto.colorCode,
        ralCode: updateFoilDto.ralCode,
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
