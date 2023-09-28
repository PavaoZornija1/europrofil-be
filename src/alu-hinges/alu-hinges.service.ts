import { Injectable } from '@nestjs/common';
import { CreateAluHingeDto } from './dto/create-alu-hinge.dto';
import { UpdateAluHingeDto } from './dto/update-alu-hinge.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluHingesService {
  async create(createAluHingeDto: CreateAluHingeDto) {
    return await prisma.cmsAluHinges.create({
      data: {
        name: createAluHingeDto.name,
        productCode: createAluHingeDto.productCode,
        cmsHingeType: createAluHingeDto.hingeType
          ? {
              connect: {
                id: createAluHingeDto.hingeType,
              },
            }
          : undefined,
        cmsAluFrameTypes: {
          connect: createAluHingeDto.frameTypes.map((frameType) => ({
            id: frameType,
          })),
        },
        price: createAluHingeDto.price,
      },
    });
  }

  async findAll() {
    return await prisma.cmsAluHinges.findMany({
      where: { isActive: true },
      include: {
        cmsAluFrameTypes: {
          where: {
            isActive: true,
          },
        },
        cmsHingeType: true,
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluHinges.findUnique({
      where: { id: id },
      include: {
        cmsAluFrameTypes: {
          where: {
            isActive: true,
          },
        },
        cmsHingeType: true,
      },
    });
  }

  async update(id: string, updateAluHingeDto: UpdateAluHingeDto) {
    await prisma.cmsAluHinges.update({
      where: { id: id },
      data: {
        cmsAluFrameTypes: {
          set: [],
        },
      },
    });

    return await prisma.cmsAluHinges.update({
      where: {
        id: id,
      },
      data: {
        name: updateAluHingeDto.name,
        productCode: updateAluHingeDto.productCode,
        modified: new Date(),
        cmsHingeType: updateAluHingeDto.hingeType
          ? {
              connect: {
                id: updateAluHingeDto.hingeType,
              },
            }
          : undefined,
        cmsAluFrameTypes: {
          connect: updateAluHingeDto.frameTypes.map((frameType) => ({
            id: frameType,
          })),
        },
        price: updateAluHingeDto.price,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsAluHinges.update({
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
