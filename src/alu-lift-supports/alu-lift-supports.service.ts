import { Injectable } from '@nestjs/common';
import { CreateAluLiftSupportDto } from './dto/create-alu-lift-support.dto';
import { UpdateAluLiftSupportDto } from './dto/update-alu-lift-support.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluLiftSupportsService {
  async create(createAluLiftSupportDto: CreateAluLiftSupportDto) {
    return await prisma.cmsAluLiftSupports.create({
      data: {
        name: createAluLiftSupportDto.name,
        productCode: createAluLiftSupportDto.productCode,
        ordering: createAluLiftSupportDto.ordering,
        description: createAluLiftSupportDto.description,
        pricePerUnit: createAluLiftSupportDto.pricePerUnit,
      },
    });
  }

  async findAll() {
    return await prisma.cmsAluLiftSupports.findMany({
      where: { isActive: true },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluLiftSupports.findUnique({
      where: { id: id, isActive: true },
    });
  }

  async update(id: string, updateAluLiftSupportDto: UpdateAluLiftSupportDto) {
    return await prisma.cmsAluLiftSupports.update({
      where: {
        id: id,
      },
      data: {
        name: updateAluLiftSupportDto.name,
        productCode: updateAluLiftSupportDto.productCode,
        ordering: updateAluLiftSupportDto.ordering,
        description: updateAluLiftSupportDto.description,
        pricePerUnit: updateAluLiftSupportDto.pricePerUnit,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsAluLiftSupports.update({
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
