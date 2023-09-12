import { Injectable } from '@nestjs/common';
import { CreateAluHingeDto } from './dto/create-alu-hinge.dto';
import { UpdateAluHingeDto } from './dto/update-alu-hinge.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluHingesService {
  async create(createAluHingeDto: CreateAluHingeDto) {
    return await prisma.cmsAluHinges.create({
      data: {
        name: createAluHingeDto.name,
        productCode: createAluHingeDto.productCode,
        cmsHingeTypeId: createAluHingeDto.hingeType?.id,
        price: createAluHingeDto.price,
      },
    });
  }

  async findAll() {
    return await prisma.cmsAluHinges.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsAluHinges.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updateAluHingeDto: UpdateAluHingeDto) {
    return await prisma.cmsAluHinges.update({
      where: {
        id: id,
      },
      data: {
        name: updateAluHingeDto.name,
        productCode: updateAluHingeDto.productCode,
        cmsHingeTypeId: updateAluHingeDto.hingeType?.id,
        price: updateAluHingeDto.price,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsAluHinges.update({
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
