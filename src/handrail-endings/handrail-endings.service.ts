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
        cmsHandrailId: createHandrailEndingDto.handrail?.id,
        cmsMechanismsId: createHandrailEndingDto.mechanism?.id,
        parentId: createHandrailEndingDto.parent?.id,
      },
    });
  }

  async findAll() {
    return await prisma.cmsHandrailEndings.findMany({
      where: { isActive: true },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsHandrailEndings.findUnique({
      where: { id: id, isActive: true },
    });
  }

  async update(id: string, updateHandrailEndingDto: UpdateHandrailEndingDto) {
    return await prisma.cmsHandrailEndings.update({
      where: {
        id: id,
      },
      data: {
        name: updateHandrailEndingDto.name,
        productCode: updateHandrailEndingDto.productCode,
        pricePerM: updateHandrailEndingDto.pricePerM,
        cmsHandrailId: updateHandrailEndingDto.handrail?.id,
        cmsMechanismsId: updateHandrailEndingDto.mechanism?.id,
        parentId: updateHandrailEndingDto.parent?.id,
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
