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
        cmsMechanism: {
          connect: {
            id: createFillDto.mechanism?.id,
          },
        },
        parent: {
          connect: {
            id: createFillDto.parent?.id,
          },
        },
      },
    });
  }

  async findAll() {
    return await prisma.cmsFills.findMany({
      where: { isActive: true },
      include: {
        parent: true,
        children: {
          where: {
            isActive: true,
          },
        },
        cmsMechanism: true,
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsFills.findUnique({
      where: { id: id },
      include: {
        parent: true,
        children: true,
        cmsMechanism: true,
      },
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
        foilAvailable: updateFillDto.foilAvailable,
        pricePerMSquare: updateFillDto.pricePerMSquare,
        cmsMechanism: {
          connect: {
            id: updateFillDto.mechanism?.id,
          },
        },
        parent: {
          connect: {
            id: updateFillDto.parent?.id,
          },
        },
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
