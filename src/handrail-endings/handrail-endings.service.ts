import { Injectable } from '@nestjs/common';
import { CreateHandrailEndingDto } from './dto/create-handrail-ending.dto';
import { UpdateHandrailEndingDto } from './dto/update-handrail-ending.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class HandrailEndingsService {
  create(createHandrailEndingDto: CreateHandrailEndingDto) {
    return 'This action adds a new handrailEnding';
  }

  findAll() {
    return prisma.cmsHandrailEndings.findMany({ where: { isActive: true } });
  }

  findOne(id: string) {
    return prisma.cmsHandrailEndings.findUnique({
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
