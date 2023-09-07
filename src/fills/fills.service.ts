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
        cmsMechanismsId: createFillDto.mechanism?.id,
        foilAvailable: createFillDto.foilAvailable,
      },
    });
  }

  async findAll() {
    return await prisma.cmsFills.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsFills.findUnique({
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
