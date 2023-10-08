import { Injectable } from '@nestjs/common';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SettingsService {
  async findAll() {
    return await prisma.cmsSettings.findMany();
  }

  async update(id: string, updateSettingDto: UpdateSettingDto) {
    return await prisma.cmsSettings.update({
      where: {
        id: id,
      },
      data: {
        orderEmail: updateSettingDto.orderEmail,
        currency: updateSettingDto.currency,
        vat: updateSettingDto.vat,
        introText: updateSettingDto.introText,
      },
    });
  }
}
