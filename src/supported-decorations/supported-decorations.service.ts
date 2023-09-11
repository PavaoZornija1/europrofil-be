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
        cmsHandrailId: createSupportedDecorationDto.handrail?.id,
        cmsHandrailDecorationId:
          createSupportedDecorationDto.handrailDecoration?.id,
      },
    });
  }

  findAll() {
    return prisma.cmsSupportedDecorations.findMany({
      where: { isActive: true },
    });
  }

  findOne(id: string) {
    return `This action returns a #${id} supportedDecoration`;
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
        cmsHandrailId: updateSupportedDecorationDto.handrail?.id,
        cmsHandrailDecorationId:
          updateSupportedDecorationDto.handrailDecoration?.id,
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
