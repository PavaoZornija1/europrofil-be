import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EmployeesService {
  async create(createEmployeeDto: CreateEmployeeDto) {
    return await prisma.user.create({
      data: {
        username: createEmployeeDto.name,
        email: createEmployeeDto.email,
        // hesirati
        password: createEmployeeDto.password,
        cmsDepartment: createEmployeeDto.department
          ? {
              connect: {
                id: createEmployeeDto.department,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.user.findMany({
      include: {
        cmsDepartment: true,
      },
    });
  }

  async findOne(id: string) {
    return await prisma.user.findUnique({
      where: { id: id },
      include: {
        cmsDepartment: true,
      },
    });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        username: updateEmployeeDto.name,
        email: updateEmployeeDto.email,
        // hesirati
        password: updateEmployeeDto.password,
        cmsDepartment: updateEmployeeDto.department
          ? {
              connect: {
                id: updateEmployeeDto.department,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        // isActive: false,
        // isDeleted: true,
        // deleted: new Date(),
      },
    });
  }
}
