import { Injectable } from '@nestjs/common';
import { CreateExtraDto } from './dto/create-extra.dto';
import { UpdateExtraDto } from './dto/update-extra.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ExtrasService {
  async create(createExtraDto: CreateExtraDto, userId: string) {
    return await prisma.cmsExtras.create({
      data: {
        name: createExtraDto.name,
        productCode: createExtraDto.productCode,
        unit: createExtraDto.unit,
        pricePerUnit: createExtraDto.pricePerUnit,
        cmsMechanisms: {
          connect: createExtraDto.mechanisms.map((mechanism) => ({
            id: mechanism,
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
    return await prisma.cmsExtras.findMany({
      where: { isActive: true },
      include: {
        cmsMechanisms: true,
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsExtras.findUnique({
      where: { id: id },
      include: {
        cmsMechanisms: true,
      },
    });
  }

  async update(id: string, updateExtraDto: UpdateExtraDto, userId: string) {
    await prisma.cmsExtras.update({
      where: { id: id },
      data: {
        cmsMechanisms: {
          set: [],
        },
      },
    });

    return await prisma.cmsExtras.update({
      where: {
        id: id,
      },
      data: {
        name: updateExtraDto.name,
        productCode: updateExtraDto.productCode,
        unit: updateExtraDto.unit,
        modified: new Date(),
        pricePerUnit: updateExtraDto.pricePerUnit,
        cmsMechanisms: {
          connect: updateExtraDto.mechanisms.map((mechanism) => ({
            id: mechanism,
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
