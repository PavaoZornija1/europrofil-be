import { Injectable } from '@nestjs/common';
import { CreateSupportedProfileDto } from './dto/create-supported-profile.dto';
import { UpdateSupportedProfileDto } from './dto/update-supported-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SupportedProfilesService {
  async create(createSupportedProfileDto: CreateSupportedProfileDto) {
    return await prisma.cmsSupportedProfiles.create({
      data: {
        price: createSupportedProfileDto.price,
        productCode: createSupportedProfileDto.productCode,
        cmsHandrailDecoration: createSupportedProfileDto.handrailDecoration
          ? {
              connect: {
                id: createSupportedProfileDto.handrailDecoration,
              },
            }
          : undefined,
        cmsHorizontalProfile: createSupportedProfileDto.horizontalProfile
          ? {
              connect: {
                id: createSupportedProfileDto.horizontalProfile,
              },
            }
          : undefined,
      },
    });
  }

  async findAll() {
    return await prisma.cmsSupportedProfiles.findMany({
      include: {
        cmsHandrailDecoration: true,
        cmsHorizontalProfile: true,
      },
      where: { isActive: true },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsSupportedProfiles.findUnique({
      include: {
        cmsHandrailDecoration: true,
        cmsHorizontalProfile: true,
      },
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateSupportedProfileDto: UpdateSupportedProfileDto,
  ) {
    return await prisma.cmsSupportedProfiles.update({
      where: {
        id: id,
      },
      data: {
        price: updateSupportedProfileDto.price,
        productCode: updateSupportedProfileDto.productCode,
        cmsHandrailDecoration: updateSupportedProfileDto.handrailDecoration
          ? {
              connect: {
                id: updateSupportedProfileDto.handrailDecoration,
              },
            }
          : undefined,
        cmsHorizontalProfile: updateSupportedProfileDto.horizontalProfile
          ? {
              connect: {
                id: updateSupportedProfileDto.horizontalProfile,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string) {
    return await prisma.cmsSupportedProfiles.update({
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
