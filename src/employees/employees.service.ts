import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApprovalStatus, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class EmployeesService {
  async create(createEmployeeDto: CreateEmployeeDto) {
    return await prisma.cmsUsers.create({
      data: {
        name: createEmployeeDto.name,
        isEmployee: true,
        isAdministrator: createEmployeeDto.isAdministrator,
        password: createEmployeeDto.password,
        address: createEmployeeDto.address,
        note: createEmployeeDto.note,
        approvalStatus: ApprovalStatus.Accepted,
        cmsDepartmentId: createEmployeeDto.department?.id,
      },
    });
  }

  async findAll() {
    return await prisma.cmsUsers.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return await prisma.cmsUsers.findUnique({
      where: { id: id, isActive: true },
    });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return await prisma.cmsUsers.update({
      where: {
        id: id,
      },
      data: {
        name: updateEmployeeDto.name,
        isEmployee: true,
        isAdministrator: updateEmployeeDto.isAdministrator,
        password: updateEmployeeDto.password,
        address: updateEmployeeDto.address,
        note: updateEmployeeDto.note,
        approvalStatus: ApprovalStatus.Accepted,
        cmsDepartmentId: updateEmployeeDto.department?.id,
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
