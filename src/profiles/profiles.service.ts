import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProfilesService {
  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  findAll() {
    return prisma.cmsSupportedProfiles.findMany({ where: { isActive: true } });
  }

  findOne(id: string) {
    return prisma.cmsSupportedProfiles.findUnique({
      where: { id: id, isActive: true },
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
