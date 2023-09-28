import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EmployeesService {
  async create(createEmployeeDto: CreateEmployeeDto) {
    return await prisma.cmsUsers.create({
      data: {
        name: createEmployeeDto.name,
        email: createEmployeeDto.email,
        username: createEmployeeDto.username,
        isEmployee: true,
        isAdministrator: createEmployeeDto.isAdministrator,
        // hesirati
        password: createEmployeeDto.password,
        phone: createEmployeeDto.phone,
        address: createEmployeeDto.address,
        note: createEmployeeDto.note,
        approvalStatus: createEmployeeDto.approvalStatus,
        // cmsDepartmentId: createEmployeeDto.department?.id,
      },
    });
  }

  async findAll() {
    return await prisma.cmsUsers.findMany({
      where: { isActive: true, isEmployee: true, isAdministrator: false },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsUsers.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return await prisma.cmsUsers.update({
      where: {
        id: id,
      },
      data: {
        name: updateEmployeeDto.name,
        email: updateEmployeeDto.email,
        username: updateEmployeeDto.username,
        isEmployee: true,
        modified: new Date(),
        isAdministrator: updateEmployeeDto.isAdministrator,
        password: updateEmployeeDto.password,
        phone: updateEmployeeDto.phone,
        address: updateEmployeeDto.address,
        note: updateEmployeeDto.note,
        approvalStatus: updateEmployeeDto.approvalStatus,
        // cmsDepartmentId: updateEmployeeDto.department?.id,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsUsers.update({
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
