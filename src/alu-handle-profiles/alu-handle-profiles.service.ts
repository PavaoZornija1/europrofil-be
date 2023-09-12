import { Injectable } from '@nestjs/common';
import { CreateAluHandleProfileDto } from './dto/create-alu-handle-profile.dto';
import { UpdateAluHandleProfileDto } from './dto/update-alu-handle-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluHandleProfilesService {
  async create(createAluHandleProfileDto: CreateAluHandleProfileDto) {
    return await prisma.cmsAluHandleProfiles.create({
      data: {
        name: createAluHandleProfileDto.name,
        productCode: createAluHandleProfileDto.productCode,
        frameLengthReduction: createAluHandleProfileDto.frameLengthReduction,
        customColorAvailable: createAluHandleProfileDto.customColorAvailable,
        pricePerMeter: createAluHandleProfileDto.pricePerMeter,
        priceIncrease: createAluHandleProfileDto.priceIncrease,
        ordering: createAluHandleProfileDto.ordering,
      },
    });
  }

  async findAll() {
    return await prisma.cmsAluHandleProfiles.findMany({
      where: { isActive: true },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluHandleProfiles.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateAluHandleProfileDto: UpdateAluHandleProfileDto,
  ) {
    return await prisma.cmsAluHandleProfiles.update({
      where: {
        id: id,
      },
      data: {
        name: updateAluHandleProfileDto.name,
        productCode: updateAluHandleProfileDto.productCode,
        frameLengthReduction: updateAluHandleProfileDto.frameLengthReduction,
        customColorAvailable: updateAluHandleProfileDto.customColorAvailable,
        pricePerMeter: updateAluHandleProfileDto.pricePerMeter,
        priceIncrease: updateAluHandleProfileDto.priceIncrease,
        ordering: updateAluHandleProfileDto.ordering,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsAluHandleProfiles.update({
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
