import { Injectable } from '@nestjs/common';
import { CreateAluProfileDto } from './dto/create-alu-profile.dto';
import { UpdateAluProfileDto } from './dto/update-alu-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluProfilesService {
  async create(createAluProfileDto: CreateAluProfileDto) {
    return await prisma.cmsAluFrameTypes.create({
      data: {
        name: createAluProfileDto.name,
        requiresKp: createAluProfileDto.requiresKp,
        corverCoverPrice: createAluProfileDto.cornerCoverPrice,
        productCode: createAluProfileDto.productCode,
        requiresPvc: createAluProfileDto.requiresPvc,
        requiresSpecialHinges: createAluProfileDto.requiresSpecialHinges,
        fillingWidthReduction: createAluProfileDto.fillingWidthReduction,
        fillingHeightReduction: createAluProfileDto.fillingHeightReduction,
        handleHoleInlet: createAluProfileDto.handleHoleInlet,
        handleHoleOffset: createAluProfileDto.handleHoleOffset,
        ordering: createAluProfileDto.ordering,
        corverCoverProductCode: createAluProfileDto.cornerCoverProductCode,
        detailsLink: createAluProfileDto.detailsLink,
      },
    });
  }

  async findAll() {
    return await prisma.cmsAluFrameTypes.findMany({
      where: { isActive: true },
      include: {
        cmsAluFills: true,
        cmsAluFrameTreatments: true,
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluFrameTypes.findUnique({
      where: { id: id },
      include: {
        cmsAluFills: true,
      },
    });
  }

  async update(id: string, updateAluProfileDto: UpdateAluProfileDto) {
    return await prisma.cmsAluFrameTypes.update({
      where: {
        id: id,
      },
      data: {
        name: updateAluProfileDto.name,
        requiresKp: updateAluProfileDto.requiresKp,
        corverCoverPrice: updateAluProfileDto.cornerCoverPrice,
        productCode: updateAluProfileDto.productCode,
        requiresPvc: updateAluProfileDto.requiresPvc,
        requiresSpecialHinges: updateAluProfileDto.requiresSpecialHinges,
        fillingWidthReduction: updateAluProfileDto.fillingWidthReduction,
        fillingHeightReduction: updateAluProfileDto.fillingHeightReduction,
        handleHoleInlet: updateAluProfileDto.handleHoleInlet,
        handleHoleOffset: updateAluProfileDto.handleHoleOffset,
        ordering: updateAluProfileDto.ordering,
        corverCoverProductCode: updateAluProfileDto.cornerCoverProductCode,
        detailsLink: updateAluProfileDto.detailsLink,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsAluFrameTypes.update({
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
