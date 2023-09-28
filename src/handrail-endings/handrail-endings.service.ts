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
        cmsMechanisms: {
          connect: createHandrailEndingDto.mechanism.map((mechanism) => ({
            id: mechanism,
          })),
        },
        cmsHandrails: {
          connect: createHandrailEndingDto.handrail.map((mechanism) => ({
            id: mechanism,
          })),
        },
        parent: createHandrailEndingDto.parent
          ? {
              connect: {
                id: createHandrailEndingDto.parent,
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
        children: {
          where: { isActive: true },
          include: {
            cmsHandrails: {
              where: { isActive: true },
            },
            cmsMechanisms: {
              where: { isActive: true },
            },
            children: {
              where: { isActive: true },
              include: {
                cmsHandrails: {
                  where: { isActive: true },
                },
                cmsMechanisms: {
                  where: { isActive: true },
                },
              },
            },
          },
        },
        cmsHandrails: {
          where: { isActive: true },
        },
        cmsMechanisms: {
          where: { isActive: true },
        },
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsHandrailEndings.findUnique({
      where: { id: id },
      include: {
        children: {
          where: { isActive: true },
          include: {
            cmsHandrails: {
              where: { isActive: true },
            },
            cmsMechanisms: {
              where: { isActive: true },
            },
            children: {
              where: { isActive: true },
              include: {
                cmsHandrails: {
                  where: { isActive: true },
                },
                cmsMechanisms: {
                  where: { isActive: true },
                },
              },
            },
          },
        },
        cmsHandrails: {
          where: { isActive: true },
        },
        cmsMechanisms: {
          where: { isActive: true },
        },
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
        modified: new Date(),
        productCode: updateHandrailEndingDto.productCode,
        pricePerM: updateHandrailEndingDto.pricePerM,
        cmsMechanisms: {
          connect: updateHandrailEndingDto.mechanism.map((mechanism) => ({
            id: mechanism,
          })),
        },
        cmsHandrails: {
          connect: updateHandrailEndingDto.handrail.map((mechanism) => ({
            id: mechanism,
          })),
        },
        parent: updateHandrailEndingDto.parent
          ? {
              connect: {
                id: updateHandrailEndingDto.parent,
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
