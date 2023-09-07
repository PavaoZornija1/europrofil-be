import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

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

  @IsNumber()
  @IsNotEmpty()
  public vat: number;

  @IsNumber()
  @IsNotEmpty()
  public handleHolePrice: number;

  @IsNumber()
  @IsNotEmpty()
  public hingeHolePrice: number;

  @IsNumber()
  @IsNotEmpty()
  public hingeHoleWithInstallationPrice: number;

  @IsNumber()
  @IsNotEmpty()
  public lockHolePrice: number;

  @IsNumber()
  @IsNotEmpty()
  public serviceCostPercentage: number;

  @IsNumber()
  @IsNotEmpty()
  public serviceCostPerFrame: number;

  @IsNumber()
  @IsNotEmpty()
  public serviceCostPerMeter: number;

  @IsNumber()
  @IsNotEmpty()
  public bevel5mmPricePerMeter: number;

  @IsNumber()
  @IsNotEmpty()
  public bevel10mmPricePerMeter: number;

  @IsNumber()
  @IsNotEmpty()
  public bevel15mmPricePerMeter: number;

  @IsNumber()
  @IsNotEmpty()
  public bevel20mmPricePerMeter: number;

  @IsNumber()
  @IsNotEmpty()
  public sandblastingPricePerMeterSquared: number;

  @IsNumber()
  @IsNotEmpty()
  public sandblastingWithFoilPricePerMeterSquared: number;

  @IsNumber()
  @IsNotEmpty()
  public temperingGlassPerMeterSquared: number;

  @IsNumber()
  @IsNotEmpty()
  public protectiveFoilPerMeterSquared: number;

  @IsNumber()
  @IsNotEmpty()
  public decorativeFoilPerMeterSquared: number;

  @IsNumber()
  @IsNotEmpty()
  public motiveFoilPerMeterSquared: number;

  @IsNumber()
  @IsNotEmpty()
  public sandblastedFoilPerMeterSquared: number;
}
