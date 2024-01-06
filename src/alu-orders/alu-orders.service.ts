import { Injectable } from '@nestjs/common';
import { CreateAluOrderDto } from './dto/create-alu-order.dto';
import { UpdateAluOrderDto } from './dto/update-alu-order.dto';

import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluOrdersService {
  async create(createAluOrderDto: CreateAluOrderDto, userId: string) {
    const newOrder = await prisma.cmsAluOrders.create({
      data: {
        codeYear: createAluOrderDto.codeYear,
        codeNumber: createAluOrderDto.codeNumber,
        code: createAluOrderDto.code,
        customerDesiredDeliveryDate:
          createAluOrderDto.customerDesiredDeliveryDate,
        customerDeliveryAddress: createAluOrderDto.customerDeliveryAddress,
        customerAddress: createAluOrderDto.customerAddress,
        customerPhone: createAluOrderDto.customerPhone,
        codeMonth: createAluOrderDto.codeMonth,
        frameTreatmentPrice: createAluOrderDto.frameTreatmentPrice,
        frameTreatmentName: createAluOrderDto.frameTreatmentName,
        frameTreatmentCode: createAluOrderDto.frameTreatmentCode,
        frameTypeName: createAluOrderDto.frameTypeName,
        frameTypeCode: createAluOrderDto.frameTypeCode,
        customerInternalOrderNumber:
          createAluOrderDto.customerInternalOrderNumber,
        customerNotes: createAluOrderDto.customerNotes,
        customerDiscount: createAluOrderDto.customerDiscount,
        fillPriceIncrease: createAluOrderDto.fillPriceIncrease,
        fillPrice: createAluOrderDto.fillPrice,
        fillName: createAluOrderDto.fillName,
        fillCode: createAluOrderDto.fillCode,
        frameTreatmentPriceIncrease:
          createAluOrderDto.frameTreatmentPriceIncrease,
        cornerCoverProductCode: createAluOrderDto.cornerCoverProductCode,
        confirmedOn: createAluOrderDto.confirmedOn,
        confirmed: createAluOrderDto.confirmed,
        jsonCost: createAluOrderDto.jsonCost,
        jsonFronts: JSON.stringify(createAluOrderDto.jsonFronts),
        jsonHeader: createAluOrderDto.jsonHeader,
        jsonOrder: createAluOrderDto.jsonOrder,
        jsonConfiguration: createAluOrderDto.jsonConfiguration,
        orderDate: createAluOrderDto.orderDate,
        totalFillArea: createAluOrderDto.totalFillArea,
        totalFrameLength: createAluOrderDto.totalFrameLength,
        totalFrameCount: createAluOrderDto.totalFrameCount,
        costPerMeterTotal: createAluOrderDto.costPerMeterTotal,
        costPerMeterBase: createAluOrderDto.costPerMeterBase,
        costTotal: createAluOrderDto.costTotal,
        costVat: createAluOrderDto.costVat,
        costBase: createAluOrderDto.costBase,
        costVatRate: createAluOrderDto.costVatRate,
        cornerCoverCount: createAluOrderDto.cornerCoverCount,
        additionallFillTreatment: JSON.stringify(
          createAluOrderDto.additionallFillTreatment,
        ),
        fill: JSON.stringify(createAluOrderDto.fill),
        frameType: JSON.stringify(createAluOrderDto.frameType),
        treatment: JSON.stringify(createAluOrderDto.treatment),
        user: JSON.stringify(createAluOrderDto.user),
        // issuedBy:
      },
    });

    return newOrder;
  }

  async findAll() {
    return await prisma.cmsAluOrders.findMany({
      where: {
        isActive: true,
      },
    });
  }

  async sendToCreate(id: string) {
    return await prisma.cmsAluOrders.update({
      where: {
        id: id,
      },
      data: {
        status: 'OBRADA',
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluOrders.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateAluOrderDto: UpdateAluOrderDto, userId: string) {
    return `This action updates a #${id} aluOrder`;
  }

  async remove(id: string) {
    return await prisma.cmsAluOrders.update({
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
