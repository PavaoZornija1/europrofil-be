import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProfilesService {
  async create(createProfileDto: CreateProfileDto) {
    return await prisma.cmsSupportedProfiles.create({
      data: {
        productCode: createProfileDto.productCode,
        price: createProfileDto.price,
        cmsHorizontalProfileId: createProfileDto.horizontalProfile?.id,
        cmsHandrailDecorationId: createProfileDto.handrailDecoration?.id,
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
      where: { id: id },
    });
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    return await prisma.cmsSupportedProfiles.update({
      where: {
        id: id,
      },
      data: {
        productCode: updateProfileDto.productCode,
        price: updateProfileDto.price,
        modified: new Date(),
        cmsHorizontalProfileId: updateProfileDto.horizontalProfile?.id,
        cmsHandrailDecorationId: updateProfileDto.handrailDecoration?.id,
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
