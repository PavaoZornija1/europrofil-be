import { Injectable } from '@nestjs/common';
import { CreateFillDto } from './dto/create-fill.dto';
import { UpdateFillDto } from './dto/update-fill.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FillsService {
  create(createFillDto: CreateFillDto) {
    return 'This action adds a new fill';
  }

  findAll() {
    return prisma.cmsFills.findMany({ where: { isActive: true } });
  }

  findOne(id: string) {
    return prisma.cmsFills.findUnique({
      where: { id: id, isActive: true },
    });
  }

  async update(id: string, updateFillDto: UpdateFillDto) {
    return await prisma.cmsFills.update({
      where: {
        id: id,
      },
      data: {
        name: updateFillDto.name,
        productCode: updateFillDto.productCode,
        requiresPvcProfile: updateFillDto.requiresPvcProfile,
        requiresThinning: updateFillDto.requiresThinning,
        customNameAllowed: updateFillDto.customNameAllowed,
        cmsMechanismsId: updateFillDto.mechanism?.id,
        foilAvailable: updateFillDto.foilAvailable,
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
