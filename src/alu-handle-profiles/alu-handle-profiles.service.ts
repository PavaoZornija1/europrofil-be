import { Injectable } from '@nestjs/common';
import { CreateAluHandleProfileDto } from './dto/create-alu-handle-profile.dto';
import { UpdateAluHandleProfileDto } from './dto/update-alu-handle-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluHandleProfilesService {
  async create(
    createAluHandleProfileDto: CreateAluHandleProfileDto,
    userId: string,
  ) {
    return await prisma.cmsAluHandleProfiles.create({
      data: {
        name: createAluHandleProfileDto.name,
        productCode: createAluHandleProfileDto.productCode,
        frameLengthReduction: createAluHandleProfileDto.frameLengthReduction,
        customColorAvailable: createAluHandleProfileDto.customColorAvailable,
        pricePerMeter: createAluHandleProfileDto.pricePerMeter,
        priceIncrease: createAluHandleProfileDto.priceIncrease,
        ordering: createAluHandleProfileDto.ordering,
        cmsAluFrameTypes: {
          connect: createAluHandleProfileDto.frameTypes.map((frameType) => ({
            id: frameType,
          })),
        },
        createdBy: userId
          ? {
              connect: {
                id: userId,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsAluHandleProfiles.findMany({
      where: { isActive: true },
      include: {
        cmsAluFrameTypes: true,
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluHandleProfiles.findUnique({
      where: { id: id },
      include: {
        cmsAluFrameTypes: true,
      },
    });
  }

  async update(
    id: string,
    updateAluHandleProfileDto: UpdateAluHandleProfileDto,
    userId: string,
  ) {
    await prisma.cmsAluHandleProfiles.update({
      where: { id: id },
      data: {
        cmsAluFrameTypes: {
          set: [],
        },
      },
    });

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
        modified: new Date(),
        cmsAluFrameTypes: {
          connect: updateAluHandleProfileDto.frameTypes.map((frameType) => ({
            id: frameType,
          })),
        },
        modifiedBy: userId
          ? {
              connect: {
                id: userId,
              },
            }
          : undefined,
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
