import { Injectable } from '@nestjs/common';
import { CreateAluProfileDto } from './dto/create-alu-profile.dto';
import { UpdateAluProfileDto } from './dto/update-alu-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluProfilesService {
  async create(createAluProfileDto: CreateAluProfileDto, userId: string) {
    return await prisma.cmsAluFrameTypes.create({
      data: {
        name: createAluProfileDto.name,
        pricePerMeter: createAluProfileDto.pricePerMeter,
        priceIncrease: createAluProfileDto.priceIncrease,
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
    return await prisma.cmsAluFrameTypes.findMany({
      where: { isActive: true },
      include: {
        cmsAluLiftSupports: {
          where: {
            isActive: true,
          },
        },
        cmsAluHandleProfiles: {
          where: {
            isActive: true,
          },
        },
        cmsAluHinges: {
          where: {
            isActive: true,
          },
        },
        cmsAluFills: {
          where: {
            isActive: true,
          },
        },
        cmsAluFrameTreatments: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsAluFrameTypes.findUnique({
      where: { id: id },
      include: {
        cmsAluLiftSupports: {
          where: {
            isActive: true,
          },
        },
        cmsAluHandleProfiles: {
          where: {
            isActive: true,
          },
        },
        cmsAluHinges: {
          include: {
            cmsHingeType: true,
          },
          where: {
            isActive: true,
          },
        },
        cmsAluFills: {
          where: {
            isActive: true,
          },
          include: {
            children: {
              where: {
                isActive: true,
              },
            },
            parent: {
              where: {
                isActive: true,
              },
            },
          },
        },
        cmsAluFrameTreatments: {
          where: {
            isActive: true,
          },
        },
      },
    });
  }

  async update(
    id: string,
    updateAluProfileDto: UpdateAluProfileDto,
    userId: string,
  ) {
    return await prisma.cmsAluFrameTypes.update({
      where: {
        id: id,
      },
      data: {
        name: updateAluProfileDto.name,
        pricePerMeter: updateAluProfileDto.pricePerMeter,
        modified: new Date(),
        priceIncrease: updateAluProfileDto.priceIncrease,
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
