import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DepartmentsService {
  async create(createDepartmentDto: CreateDepartmentDto) {
    return await prisma.cmsDepartments.create({
      data: {
        name: createDepartmentDto.name,
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

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return await prisma.cmsDepartments.update({
      where: {
        id: id,
      },
      data: {
        name: updateDepartmentDto.name,
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
