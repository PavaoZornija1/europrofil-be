import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  async findAll() {
    return await prisma.cmsOrders.findMany({
      where: {
        isActive: true,
      },
      include: {
        cmsHandrail: true,
        cmsHandrailDecoration: true,
        cmsHandrailEnding: true,
        cmsHorizontalProfile: true,
        cmsMechanism: true,
        cmsOrderDoors: true,
      },
    });
  }

  findOne(id: string) {
    return prisma.cmsOrders.findUnique({
      where: { id: id },
      include: {
        cmsHandrail: true,
        cmsHandrailDecoration: true,
        cmsHandrailEnding: true,
        cmsHorizontalProfile: true,
        cmsMechanism: true,
        cmsOrderDoors: true,
      },
    });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: string) {
    return await prisma.cmsOrders.update({
      where: {
        id: id,
      },
      data: {
        isActive: false,
        // isDeleted: true,
        deleted: new Date(),
      },
    });
  }
}
