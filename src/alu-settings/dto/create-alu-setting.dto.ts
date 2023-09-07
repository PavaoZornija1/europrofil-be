import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateAluSettingDto {
  @IsString()
  @IsNotEmpty()
  public iso9001DocumentName: string;

  @IsString()
  @IsNotEmpty()
  public orderEmail: string;

  @IsString()
  @IsNotEmpty()
  public currency: string;

  @IsString()
  @IsNotEmpty()
  public introText: string;

  @IsDecimal()
  @IsNotEmpty()
  public vat: number;

  @IsDecimal()
  @IsNotEmpty()
  public handleHolePrice: number;

  @IsDecimal()
  @IsNotEmpty()
  public hingeHolePrice: number;

  @IsDecimal()
  @IsNotEmpty()
  public hingeHoleWithInstallationPrice: number;

  @IsDecimal()
  @IsNotEmpty()
  public lockHolePrice: number;

  @IsDecimal()
  @IsNotEmpty()
  public serviceCostPercentage: number;

  @IsDecimal()
  @IsNotEmpty()
  public serviceCostPerFrame: number;

  @IsDecimal()
  @IsNotEmpty()
  public serviceCostPerMeter: number;

  @IsDecimal()
  @IsNotEmpty()
  public bevel5mmPricePerMeter: number;

  @IsDecimal()
  @IsNotEmpty()
  public bevel10mmPricePerMeter: number;

  @IsDecimal()
  @IsNotEmpty()
  public bevel15mmPricePerMeter: number;

  @IsDecimal()
  @IsNotEmpty()
  public bevel20mmPricePerMeter: number;

  @IsDecimal()
  @IsNotEmpty()
  public sandblastingPricePerMeterSquared: number;

  @IsDecimal()
  @IsNotEmpty()
  public sandblastingWithFoilPricePerMeterSquared: number;

  @IsDecimal()
  @IsNotEmpty()
  public temperingGlassPerMeterSquared: number;

  @IsDecimal()
  @IsNotEmpty()
  public protectiveFoilPerMeterSquared: number;

  @IsDecimal()
  @IsNotEmpty()
  public decorativeFoilPerMeterSquared: number;

  @IsDecimal()
  @IsNotEmpty()
  public motiveFoilPerMeterSquared: number;

  @IsDecimal()
  @IsNotEmpty()
  public sandblastedFoilPerMeterSquared: number;
}
