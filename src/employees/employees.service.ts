import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { genSalt, hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EmployeesService {
  async create(createEmployeeDto: CreateEmployeeDto) {
    const salt = await genSalt(10);
    const hashedPw = await hash(createEmployeeDto.password, salt);

    return await prisma.user.create({
      data: {
        username: createEmployeeDto.name,
        name: createEmployeeDto.name,
        note: createEmployeeDto.note,
        address: createEmployeeDto.address,
        phone: createEmployeeDto.phone,
        email: createEmployeeDto.email,
        password: hashedPw,
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
    const salt = await genSalt(10);
    const hashedPw = await hash(updateEmployeeDto.password, salt);

    return await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        username: updateEmployeeDto.name,
        email: updateEmployeeDto.email,
        name: updateEmployeeDto.name,
        note: updateEmployeeDto.note,
        address: updateEmployeeDto.address,
        phone: updateEmployeeDto.phone,
        password: hashedPw,
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
        isActive: false,
        isDeleted: true,
        deleted: new Date(),
      },
    });
  }
}
