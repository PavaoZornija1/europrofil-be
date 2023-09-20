import { Injectable } from '@nestjs/common';
import { CreateAluFrameTreatmentDto } from './dto/create-alu-frame-treatment.dto';
import { UpdateAluFrameTreatmentDto } from './dto/update-alu-frame-treatment.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluFrameTreatmentsService {
  async create(createAluFrameTreatmentDto: CreateAluFrameTreatmentDto) {
    return await prisma.cmsAluFrameTreatments.create({
      data: {
        name: createAluFrameTreatmentDto.name,
        productCode: createAluFrameTreatmentDto.productCode,
        customColorAvailable: createAluFrameTreatmentDto.customColorAvailable,
        pricePerMeter: createAluFrameTreatmentDto.pricePerMeter,
        priceIncrease: createAluFrameTreatmentDto.priceIncrease,
        cmsAluFrameType: createAluFrameTreatmentDto.frameType
          ? {
              connect: {
                id: createAluFrameTreatmentDto.frameType,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsAluFrameTreatments.findMany({
      where: { isActive: true },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluFrameTreatments.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateAluFrameTreatmentDto: UpdateAluFrameTreatmentDto,
  ) {
    return await prisma.cmsAluFrameTreatments.update({
      where: {
        id: id,
      },
      data: {
        name: updateAluFrameTreatmentDto.name,
        productCode: updateAluFrameTreatmentDto.productCode,
        customColorAvailable: updateAluFrameTreatmentDto.customColorAvailable,
        // ordering: updateAluFrameTreatmentDto.ordering,
        pricePerMeter: updateAluFrameTreatmentDto.pricePerMeter,
        priceIncrease: updateAluFrameTreatmentDto.priceIncrease,
        cmsAluFrameType: updateAluFrameTreatmentDto.frameType
          ? {
              connect: {
                id: updateAluFrameTreatmentDto.frameType,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsAluFrameTreatments.update({
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
