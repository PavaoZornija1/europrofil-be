import { Injectable } from '@nestjs/common';
import { CreateAluDepartmentDto } from './dto/create-alu-department.dto';
import { UpdateAluDepartmentDto } from './dto/update-alu-department.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluDepartmentsService {
  async create(createDepartmentDto: CreateAluDepartmentDto, userId: string) {
    return await prisma.cmsDepartments.create({
      data: {
        name: createDepartmentDto.name,
        isAlu: true,
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
    return await prisma.cmsDepartments.findMany({
      where: { isActive: true, isAlu: true },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsDepartments.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateDepartmentDto: UpdateAluDepartmentDto,
    userId: string,
  ) {
    return await prisma.cmsDepartments.update({
      where: {
        id: id,
      },
      data: {
        name: updateDepartmentDto.name,
        modified: new Date(),
        isAlu: true,
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
    return await prisma.cmsDepartments.update({
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
