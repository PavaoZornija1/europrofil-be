import { Injectable } from '@nestjs/common';
import { CreatePvcProfileDto } from './dto/create-pvc-profile.dto';
import { UpdatePvcProfileDto } from './dto/update-pvc-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PvcProfilesService {
  async create(createPvcProfileDto: CreatePvcProfileDto) {
    return await prisma.cmsPvcProfiles.create({
      data: {
        name: createPvcProfileDto.name,
        productCode: createPvcProfileDto.productCode,
        pricePerM: createPvcProfileDto.pricePerM,
        ralCode: createPvcProfileDto.ralCode,
        cmsMechanisms: createPvcProfileDto.mechanism?.id
          ? {
              connect: {
                id: createPvcProfileDto.mechanism?.id,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return prisma.cmsPvcProfiles.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    return prisma.cmsPvcProfiles.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updatePvcProfileDto: UpdatePvcProfileDto) {
    await prisma.cmsPvcProfiles.update({
      where: { id: id },
      data: {
        cmsMechanisms: {
          set: [],
        },
      },
    });

    return await prisma.cmsPvcProfiles.update({
      where: {
        id: id,
      },
      data: {
        name: updatePvcProfileDto.name,
        productCode: updatePvcProfileDto.productCode,
        pricePerM: updatePvcProfileDto.pricePerM,
        ralCode: updatePvcProfileDto.ralCode,
        cmsMechanisms: updatePvcProfileDto.mechanism?.id
          ? {
              connect: {
                id: updatePvcProfileDto.mechanism?.id,
              },
            }
          : undefined,
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
