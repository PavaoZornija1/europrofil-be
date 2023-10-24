import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { genSalt, hash } from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CustomersService {
  public findByUsername(username: string) {
    return prisma.cmsUsers.findFirst({
      where: {
        username: username,
      },
    });
  }

  async create(createCustomerDto: CreateCustomerDto) {
    const salt = await genSalt(10);
    const hashedPw = await hash(createCustomerDto.password, salt);

    return await prisma.cmsUsers.create({
      data: {
        name: createCustomerDto.name,
        username: createCustomerDto.username,
        isEmployee: false,
        isAdministrator: false,
        phone: createCustomerDto.phone,
        password: hashedPw,
        address: createCustomerDto.address,
        note: createCustomerDto.note,
        approvalStatus: createCustomerDto.approvalStatus,
        lockedDiscount: createCustomerDto.lockedDiscounts,
        discount: createCustomerDto.discount,
        discountHardware: createCustomerDto.discountHardware,
        discountFillings: createCustomerDto.discountFillings,
        email: createCustomerDto.email,
        useDetailedBilling: createCustomerDto.useDetailedBilling,
        deliveryAddress: createCustomerDto.deliveryAddress,
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
    const salt = await genSalt(10);
    const hashedPw = await hash(updateCustomerDto.password, salt);

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
        password: hashedPw,
        address: updateCustomerDto.address,
        note: updateCustomerDto.note,
        approvalStatus: updateCustomerDto.approvalStatus,
        lockedDiscount: updateCustomerDto.lockedDiscounts,
        email: updateCustomerDto.email,
        discountHardware: updateCustomerDto.discountHardware,
        discountFillings: updateCustomerDto.discountFillings,
        deliveryAddress: updateCustomerDto.deliveryAddress,
        useDetailedBilling: updateCustomerDto.useDetailedBilling,
        modified: new Date(),
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
