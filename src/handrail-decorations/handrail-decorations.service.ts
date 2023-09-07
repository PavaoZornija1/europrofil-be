import { Injectable } from '@nestjs/common';
import { CreateHandrailDecorationDto } from './dto/create-handrail-decoration.dto';
import { UpdateHandrailDecorationDto } from './dto/update-handrail-decoration.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HandrailDecorationsService {
  create(createHandrailDecorationDto: CreateHandrailDecorationDto) {
    return 'This action adds a new handrailDecoration';
  }

  findAll() {
    return prisma.cmsHandrailDecorations.findMany({
      where: { isActive: true },
    });
  }

  findOne(id: string) {
    return prisma.cmsHandrailDecorations.findUnique({
      where: { id: id, isActive: true },
    });
  }

  async update(
    id: string,
    updateHandrailDecorationDto: UpdateHandrailDecorationDto,
  ) {
    return await prisma.cmsHandrailDecorations.update({
      where: {
        id: id,
      },
      data: {
        name: updateHandrailDecorationDto.name,
        productCodeTopRailSingle:
          updateHandrailDecorationDto.productCodeTopRailSingle,
        productCodeTopRailDouble:
          updateHandrailDecorationDto.productCodeTopRailDouble,
        productCodeBottomRailSingle:
          updateHandrailDecorationDto.productCodeBottomRailSingle,
        productCodeBottomRailDouble:
          updateHandrailDecorationDto.productCodeBottomRailDouble,
        productCodeDivider: updateHandrailDecorationDto.productCodeDivider,
        productCodeTopProfile:
          updateHandrailDecorationDto.productCodeTopProfile,
        productCodeBottomProfile:
          updateHandrailDecorationDto.productCodeBottomProfile,
        priceTopRailSingle: updateHandrailDecorationDto.priceTopRailSingle,
        priceTopRailDouble: updateHandrailDecorationDto.priceTopRailDouble,
        priceTopProfile: updateHandrailDecorationDto.priceTopProfile,
        isSilverGloss: updateHandrailDecorationDto.isSilverGloss,
        customColorAvailable: updateHandrailDecorationDto.customColorAvailable,
        priceBottomProfile: updateHandrailDecorationDto.priceBottomProfile,
        priceDivider: updateHandrailDecorationDto.priceDivider,
        cmsMechanismsId: updateHandrailDecorationDto.mechanism?.id,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsHandrailDecorations.update({
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
