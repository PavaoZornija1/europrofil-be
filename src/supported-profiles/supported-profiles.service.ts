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
        cmsHandrailDecoration: createSupportedProfileDto.handrailDecoration?.id
          ? {
              connect: {
                id: createSupportedProfileDto.handrailDecoration?.id,
              },
            }
          : undefined,
        cmsHorizontalProfile: createSupportedProfileDto.horizontalProfile?.id
          ? {
              connect: {
                id: createSupportedProfileDto.horizontalProfile?.id,
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
        cmsHandrailDecoration: updateSupportedProfileDto.handrailDecoration?.id
          ? {
              connect: {
                id: updateSupportedProfileDto.handrailDecoration?.id,
              },
            }
          : undefined,
        cmsHorizontalProfile: updateSupportedProfileDto.horizontalProfile?.id
          ? {
              connect: {
                id: updateSupportedProfileDto.horizontalProfile?.id,
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
