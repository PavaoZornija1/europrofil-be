import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAluSettingDto {
  @IsString()
  public iso9001DocumentName?: string;

  @IsString()
  public orderEmail?: string;

  @IsString()
  public currency?: string;

  @IsString()
  public introText?: string;

  @IsNumber()
  public vat?: number;

  @IsNumber()
  public handleHolePrice?: number;

  @IsNumber()
  public hingeHolePrice?: number;

  @IsNumber()
  public hingeHoleWithInstallationPrice?: number;

  @IsNumber()
  public lockHolePrice?: number;

  @IsNumber()
  public serviceCostPercentage?: number;

  @IsNumber()
  public serviceCostPerFrame?: number;

  @IsNumber()
  public serviceCostPerMeter?: number;

  @IsNumber()
  public bevel5mmPricePerMeter?: number;

  @IsNumber()
  public bevel10mmPricePerMeter?: number;

  @IsNumber()
  public bevel15mmPricePerMeter?: number;

  @IsNumber()
  public bevel20mmPricePerMeter?: number;

  @IsNumber()
  public sandblastingPricePerMeterSquared?: number;

  @IsNumber()
  public sandblastingWithFoilPricePerMeterSquared?: number;

  @IsNumber()
  public temperingGlassPerMeterSquared?: number;

  @IsNumber()
  public protectiveFoilPerMeterSquared?: number;

  @IsNumber()
  public decorativeFoilPerMeterSquared?: number;

  @IsNumber()
  public motiveFoilPerMeterSquared?: number;

  @IsNumber()
  public sandblastedFoilPerMeterSquared?: number;
}
