import { Injectable } from '@nestjs/common';
import { CreateSupportedDecorationDto } from './dto/create-supported-decoration.dto';
import { UpdateSupportedDecorationDto } from './dto/update-supported-decoration.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SupportedDecorationsService {
  async create(createSupportedDecorationDto: CreateSupportedDecorationDto) {
    return await prisma.cmsSupportedDecorations.create({
      data: {
        price: createSupportedDecorationDto.price,
        productCode: createSupportedDecorationDto.productCode,
        cmsHandrail: createSupportedDecorationDto.handrail?.id
          ? {
              connect: {
                id: createSupportedDecorationDto.handrail?.id,
              },
            }
          : undefined,
        cmsHandrailDecoration: createSupportedDecorationDto.handrailDecoration
          ?.id
          ? {
              connect: {
                id: createSupportedDecorationDto.handrailDecoration?.id,
              },
            }
          : undefined,
      },
    });
  }

  findAll() {
    return prisma.cmsSupportedDecorations.findMany({
      where: { isActive: true },
    });
  }

  findOne(id: string) {
    return prisma.cmsSupportedDecorations.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateSupportedDecorationDto: UpdateSupportedDecorationDto,
  ) {
    return await prisma.cmsSupportedDecorations.update({
      where: {
        id: id,
      },
      data: {
        price: updateSupportedDecorationDto.price,
        productCode: updateSupportedDecorationDto.productCode,
        cmsHandrail: updateSupportedDecorationDto.handrail?.id
          ? {
              connect: {
                id: updateSupportedDecorationDto.handrail?.id,
              },
            }
          : undefined,
        cmsHandrailDecoration: updateSupportedDecorationDto.handrailDecoration
          ?.id
          ? {
              connect: {
                id: updateSupportedDecorationDto.handrailDecoration?.id,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsSupportedDecorations.update({
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
