import { Injectable } from '@nestjs/common';
import { CreateHandrailDecorationDto } from './dto/create-handrail-decoration.dto';
import { UpdateHandrailDecorationDto } from './dto/update-handrail-decoration.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HandrailDecorationsService {
  async create(createHandrailDecorationDto: CreateHandrailDecorationDto) {
    return await prisma.cmsHandrailDecorations.create({
      data: {
        name: createHandrailDecorationDto.name,
        productCodeTopRailSingle:
          createHandrailDecorationDto.productCodeTopRailSingle,
        productCodeTopRailDouble:
          createHandrailDecorationDto.productCodeTopRailDouble,
        productCodeBottomRailSingle:
          createHandrailDecorationDto.productCodeBottomRailSingle,
        productCodeBottomRailDouble:
          createHandrailDecorationDto.productCodeBottomRailDouble,
        productCodeDivider: createHandrailDecorationDto.productCodeDivider,
        productCodeTopProfile:
          createHandrailDecorationDto.productCodeTopProfile,
        productCodeBottomProfile:
          createHandrailDecorationDto.productCodeBottomProfile,
        priceTopRailSingle: createHandrailDecorationDto.priceTopRailSingle,
        priceTopRailDouble: createHandrailDecorationDto.priceTopRailDouble,
        priceBottomRailSingle:
          createHandrailDecorationDto.priceBottomRailSingle,
        priceBottomRailDouble:
          createHandrailDecorationDto.priceBottomRailDouble,
        priceTopProfile: createHandrailDecorationDto.priceTopProfile,
        isSilverGloss: createHandrailDecorationDto.isSilverGloss,
        customColorAvailable: createHandrailDecorationDto.customColorAvailable,
        priceBottomProfile: createHandrailDecorationDto.priceBottomProfile,
        priceDivider: createHandrailDecorationDto.priceDivider,
        cmsMechanisms: createHandrailDecorationDto.mechanism?.id
          ? {
              connect: {
                id: createHandrailDecorationDto.mechanism?.id,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsHandrailDecorations.findMany({
      where: { isActive: true },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsHandrailDecorations.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateHandrailDecorationDto: UpdateHandrailDecorationDto,
  ) {
    await prisma.cmsHandrailDecorations.update({
      where: { id: id },
      data: {
        cmsMechanisms: {
          set: [],
        },
      },
    });

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
        cmsMechanisms: updateHandrailDecorationDto.mechanism?.id
          ? {
              connect: {
                id: updateHandrailDecorationDto.mechanism?.id,
              },
            }
          : undefined,
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
