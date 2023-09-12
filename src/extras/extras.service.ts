import { Injectable } from '@nestjs/common';
import { CreateExtraDto } from './dto/create-extra.dto';
import { UpdateExtraDto } from './dto/update-extra.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ExtrasService {
  async create(createExtraDto: CreateExtraDto) {
    return await prisma.cmsExtras.create({
      data: {
        name: createExtraDto.name,
        productCode: createExtraDto.productCode,
        unit: createExtraDto.unit,
        pricePerUnit: createExtraDto.pricePerUnit,
        cmsMechanismsId: createExtraDto.mechanism?.id,
      },
    });
  }

  async findAll() {
    return await prisma.cmsExtras.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsExtras.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updateExtraDto: UpdateExtraDto) {
    return await prisma.cmsExtras.update({
      where: {
        id: id,
      },
      data: {
        name: updateExtraDto.name,
        productCode: updateExtraDto.productCode,
        unit: updateExtraDto.unit,
        pricePerUnit: updateExtraDto.pricePerUnit,
        cmsMechanismsId: updateExtraDto.mechanism?.id,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsExtras.update({
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
