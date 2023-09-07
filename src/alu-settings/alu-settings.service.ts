import { Injectable } from '@nestjs/common';
import { UpdateAluSettingDto } from './dto/update-alu-setting.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AluSettingsService {
  async findAll() {
    return await prisma.cmsAluSettings.findMany();
  }

  async update(id: string, updateAluSettingDto: UpdateAluSettingDto) {
    return await prisma.cmsAluSettings.update({
      where: {
        id: id,
      },
      data: {
        iso9001DocumentName: updateAluSettingDto.iso9001DocumentName,
        orderEmail: updateAluSettingDto.orderEmail,
        currency: updateAluSettingDto.currency,
        introText: updateAluSettingDto.introText,
        vat: updateAluSettingDto.vat,
        handleHolePrice: updateAluSettingDto.handleHolePrice,
        hingeHolePrice: updateAluSettingDto.hingeHolePrice,
        hingeHoleWithInstallationPrice:
          updateAluSettingDto.hingeHoleWithInstallationPrice,
        lockHolePrice: updateAluSettingDto.lockHolePrice,
        serviceCostPercentage: updateAluSettingDto.serviceCostPercentage,
        serviceCostPerFrame: updateAluSettingDto.serviceCostPerFrame,
        serviceCostPerMeter: updateAluSettingDto.serviceCostPerMeter,
        bevel5mmPricePerMeter: updateAluSettingDto.bevel5mmPricePerMeter,
        bevel10mmPricePerMeter: updateAluSettingDto.bevel10mmPricePerMeter,
        bevel15mmPricePerMeter: updateAluSettingDto.bevel15mmPricePerMeter,
        bevel20mmPricePerMeter: updateAluSettingDto.bevel20mmPricePerMeter,
        sandblastingPricePerMeterSquared:
          updateAluSettingDto.sandblastingPricePerMeterSquared,
        sandblastingWithFoilPricePerMeterSquared:
          updateAluSettingDto.sandblastingWithFoilPricePerMeterSquared,
        temperingGlassPerMeterSquared:
          updateAluSettingDto.temperingGlassPerMeterSquared,
        protectiveFoilPerMeterSquared:
          updateAluSettingDto.protectiveFoilPerMeterSquared,
        decorativeFoilPerMeterSquared:
          updateAluSettingDto.decorativeFoilPerMeterSquared,
        motiveFoilPerMeterSquared:
          updateAluSettingDto.motiveFoilPerMeterSquared,
        sandblastedFoilPerMeterSquared:
          updateAluSettingDto.sandblastedFoilPerMeterSquared,
      },
    });
  }
}
