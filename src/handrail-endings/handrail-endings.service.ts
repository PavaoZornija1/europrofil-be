import { Injectable } from '@nestjs/common';
import { CreateHandrailEndingDto } from './dto/create-handrail-ending.dto';
import { UpdateHandrailEndingDto } from './dto/update-handrail-ending.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HandrailEndingsService {
  async create(createHandrailEndingDto: CreateHandrailEndingDto) {
    return await prisma.cmsHandrailEndings.create({
      data: {
        name: createHandrailEndingDto.name,
        productCode: createHandrailEndingDto.productCode,
        pricePerM: createHandrailEndingDto.pricePerM,
        cmsHandrails: createHandrailEndingDto.mechanism?.id
          ? {
              connect: {
                id: createHandrailEndingDto.mechanism?.id,
              },
            }
          : undefined,
        cmsMechanisms: createHandrailEndingDto.mechanism?.id
          ? {
              connect: {
                id: createHandrailEndingDto.mechanism?.id,
              },
            }
          : undefined,
        parent: createHandrailEndingDto.parent?.id
          ? {
              connect: {
                id: createHandrailEndingDto.parent?.id,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsHandrailEndings.findMany({
      where: { isActive: true },
      include: {
        cmsHandrails: true,
        cmsMechanisms: true,
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsHandrailEndings.findUnique({
      where: { id: id },
      include: {
        cmsHandrails: true,
        cmsMechanisms: true,
      },
    });
  }

  async update(id: string, updateHandrailEndingDto: UpdateHandrailEndingDto) {
    await prisma.cmsHandrailEndings.update({
      where: { id: id },
      data: {
        cmsMechanisms: {
          set: [],
        },
        cmsHandrails: {
          set: [],
        },
      },
    });

    return await prisma.cmsHandrailEndings.update({
      where: {
        id: id,
      },
      data: {
        name: updateHandrailEndingDto.name,
        productCode: updateHandrailEndingDto.productCode,
        pricePerM: updateHandrailEndingDto.pricePerM,
        cmsHandrails: updateHandrailEndingDto.mechanism?.id
          ? {
              connect: {
                id: updateHandrailEndingDto.mechanism?.id,
              },
            }
          : undefined,
        cmsMechanisms: updateHandrailEndingDto.mechanism?.id
          ? {
              connect: {
                id: updateHandrailEndingDto.mechanism?.id,
              },
            }
          : undefined,
        parent: updateHandrailEndingDto.parent?.id
          ? {
              connect: {
                id: updateHandrailEndingDto.parent?.id,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsHandrailEndings.update({
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
