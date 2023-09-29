import { Injectable } from '@nestjs/common';
import { CreateAluHingeTypeDto } from './dto/create-alu-hinge-type.dto';
import { UpdateAluHingeTypeDto } from './dto/update-alu-hinge-type.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluHingeTypeService {
  async create(createAluHingeTypeDto: CreateAluHingeTypeDto, userId: string) {
    return await prisma.cmsHingeTypes.create({
      data: {
        name: createAluHingeTypeDto.name,
        code: createAluHingeTypeDto.code,
        createdBy: userId
          ? {
              connect: {
                id: userId,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsHingeTypes.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsHingeTypes.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateAluHingeTypeDto: UpdateAluHingeTypeDto,
    userId: string,
  ) {
    return await prisma.cmsHingeTypes.update({
      where: {
        id: id,
      },
      data: {
        name: updateAluHingeTypeDto.name,
        code: updateAluHingeTypeDto.code,
        modified: new Date(),
        modifiedBy: userId
          ? {
              connect: {
                id: userId,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsHingeTypes.update({
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
