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
        cmsHandrailDecorationId:
          createSupportedProfileDto.handrailDecoration?.id,
        cmsHorizontalProfileId: createSupportedProfileDto.horizontalProfile?.id,
      },
    });
  }

  async findAll() {
    return await prisma.cmsSupportedProfiles.findMany({
      where: { isActive: true },
    });
  }

  async findOne(id: string) {
    return await prisma.cmsSupportedProfiles.findUnique({
      where: { id: id, isActive: true },
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
        cmsHandrailDecorationId:
          updateSupportedProfileDto.handrailDecoration?.id,
        cmsHorizontalProfileId: updateSupportedProfileDto.horizontalProfile?.id,
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
