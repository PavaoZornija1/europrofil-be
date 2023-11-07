import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class OrdersService {
  async create(createOrderDto: CreateOrderDto, userId: string) {
    return await prisma.cmsOrders.create({
      data: {
        customerName: createOrderDto.customerName,
        customerEmail: createOrderDto.customerEmail,
        finalPrice: createOrderDto.finalPrice,
        customerPhone: createOrderDto.customerPhone,
        customerAddress: createOrderDto.customerAddress,
        customerDeliveryAddress: createOrderDto.customerDeliveryAddress,
        customerDesiredDeliveryDate: createOrderDto.customerDesiredDeliveryDate,
        customerDiscountFrame: createOrderDto.customerDiscountFrame,
        customerDiscountFills: createOrderDto.customerDiscountFills,
        customerShowPriceBreakdown: createOrderDto.customerShowPriceBreakdown,
        customerLockedDiscounts: createOrderDto.customerLockedDiscounts,
        customerOwnOrderNumber: createOrderDto.customerOwnOrderNumber,
        notes: createOrderDto.notes,
        givenOrderNumber: createOrderDto.givenOrderNumber,
        orderDate: new Date(),
        cmsMechanism: createOrderDto.mechanism
          ? {
              connect: {
                id: createOrderDto.mechanism,
              },
            }
          : undefined,
        cmsHandrail: createOrderDto.handrail
          ? {
              connect: {
                id: createOrderDto.handrail,
              },
            }
          : undefined,

        cmsHandrailDecoration: createOrderDto.handrailDecoration
          ? {
              connect: {
                id: createOrderDto.handrailDecoration,
              },
            }
          : undefined,
        handrailDecorationCustomColor:
          createOrderDto.handrailDecorationCustomColor,
        cmsHandrailEnding: createOrderDto.handrailEnding
          ? {
              connect: {
                id: createOrderDto.handrailEnding,
              },
            }
          : undefined,
        openingHeight: createOrderDto.openingHeight,
        openingWidth: createOrderDto.openingWidth,
        openingDoors: createOrderDto.openingDoors,
        railsType: createOrderDto.railsType,
        railsLengthTopValue: createOrderDto.railsLengthTopValue,
        railsLengthTopManual: createOrderDto.railsLengthTopManual,
        railsLengthBottomValue: createOrderDto.railsLengthBottomValue,
        railsLengthBottomManual: createOrderDto.railsLengthBottomManual,
        handrailHeight: createOrderDto.handrailHeight,
        totalDeceleratorPairs: createOrderDto.totalDeceleratorPairs,
        servicesFrameName: createOrderDto.servicesFrameName,
        servicesFrameChosen: createOrderDto.servicesFrameChosen,
        servicesFillName: createOrderDto.servicesFillName,
        servicesFillChosen: createOrderDto.servicesFillChosen,
        servicesConfectionName: createOrderDto.servicesConfectionName,
        servicesConfectionChosen: createOrderDto.servicesConfectionChosen,
        servicesInstallationName: createOrderDto.servicesInstallationName,
        servicesInstallationChosen: createOrderDto.servicesInstallationChosen,
        // issuedBy:
      },
    });
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

  update(id: string, updateOrderDto: UpdateOrderDto, userId: string) {
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
