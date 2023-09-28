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
        cmsHandrail: createSupportedDecorationDto.handrail
          ? {
              connect: {
                id: createSupportedDecorationDto.handrail,
              },
            }
          : undefined,
        cmsHandrailDecoration: createSupportedDecorationDto.handrailDecoration
          ? {
              connect: {
                id: createSupportedDecorationDto.handrailDecoration,
              },
            }
          : undefined,
      },
    });
  }

  findAll() {
    return prisma.cmsSupportedDecorations.findMany({
      where: { isActive: true },
      include: {
        cmsHandrail: {
          where: {
            isActive: true,
          },
        },
        cmsHandrailDecoration: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return prisma.cmsSupportedDecorations.findUnique({
      where: { id: id },
      include: {
        cmsHandrail: {
          where: {
            isActive: true,
          },
        },
        cmsHandrailDecoration: {
          where: {
            isActive: true,
          },
        },
      },
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
        modified: new Date(),
        productCode: updateSupportedDecorationDto.productCode,
        cmsHandrail: updateSupportedDecorationDto.handrail
          ? {
              connect: {
                id: updateSupportedDecorationDto.handrail,
              },
            }
          : undefined,
        cmsHandrailDecoration: updateSupportedDecorationDto.handrailDecoration
          ? {
              connect: {
                id: updateSupportedDecorationDto.handrailDecoration,
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
