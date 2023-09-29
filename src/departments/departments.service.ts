import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DepartmentsService {
  async create(createDepartmentDto: CreateDepartmentDto, userId: string) {
    return await prisma.cmsDepartments.create({
      data: {
        name: createDepartmentDto.name,
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
    return await prisma.cmsDepartments.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsDepartments.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateDepartmentDto: UpdateDepartmentDto,
    userId: string,
  ) {
    return await prisma.cmsDepartments.update({
      where: {
        id: id,
      },
      data: {
        name: updateDepartmentDto.name,
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
