import { Injectable } from '@nestjs/common';
import { CreatePvcProfileDto } from './dto/create-pvc-profile.dto';
import { UpdatePvcProfileDto } from './dto/update-pvc-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PvcProfilesService {
  create(createPvcProfileDto: CreatePvcProfileDto) {
    return 'This action adds a new pvcProfile';
  }

  async findAll() {
    return prisma.cmsPvcProfiles.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return prisma.cmsPvcProfiles.findUnique({
      where: { id: id, isActive: true },
    });
  }

  async update(id: string, updatePvcProfileDto: UpdatePvcProfileDto) {
    return await prisma.cmsPvcProfiles.update({
      where: {
        id: id,
      },
      data: {
        name: updatePvcProfileDto.name,
        productCode: updatePvcProfileDto.productCode,
        pricePerM: updatePvcProfileDto.pricePerM,
        ralCode: updatePvcProfileDto.ralCode,
        cmsMechanismsId: updatePvcProfileDto.mechanism?.id,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsPvcProfiles.update({
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
