import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CustomersService {
  async create(createCustomerDto: CreateCustomerDto) {
    return await prisma.cmsUsers.create({
      data: {
        name: createCustomerDto.name,
        username: createCustomerDto.username,
        isEmployee: false,
        isAdministrator: false,
        phone: createCustomerDto.phone,
        password: createCustomerDto.password,
        address: createCustomerDto.address,
        note: createCustomerDto.note,
        approvalStatus: createCustomerDto.approvalStatus,
        lockedDiscount: createCustomerDto.lockedDiscounts,
        discount: createCustomerDto.discount,
        email: createCustomerDto.email,
        useDetailedBilling: createCustomerDto.useDetailedBilling,
      },
    });
  }

  async findAll() {
    return await prisma.cmsUsers.findMany({
      where: { isActive: true, isEmployee: false },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsUsers.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return await prisma.cmsUsers.update({
      where: {
        id: id,
      },
      data: {
        name: updateCustomerDto.name,
        username: updateCustomerDto.username,
        isEmployee: false,
        isAdministrator: false,
        phone: updateCustomerDto.phone,
        password: updateCustomerDto.password,
        address: updateCustomerDto.address,
        note: updateCustomerDto.note,
        approvalStatus: updateCustomerDto.approvalStatus,
        lockedDiscount: updateCustomerDto.lockedDiscounts,
        email: updateCustomerDto.email,
        useDetailedBilling: updateCustomerDto.useDetailedBilling,
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
