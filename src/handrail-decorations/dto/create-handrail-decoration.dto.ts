import { CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsDecimal, IsBoolean } from 'class-validator';

export class CreateHandrailDecorationDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  public productCodeTopRailSingle: string;

  @IsString()
  public productCodeTopRailDouble: string;

  @IsString()
  public productCodeBottomRailSingle: string;

  @IsString()
  public productCodeBottomRailDouble: string;

  @IsString()
  public productCodeDivider: string;

  @IsString()
  public productCodeTopProfile: string;

  @IsString()
  public productCodeBottomProfile: string;

  @IsDecimal()
  public priceTopRailSingle: number;

  @IsDecimal()
  public priceTopRailDouble: number;

  @IsDecimal()
  public priceBottomRailSingle: number;

  @IsDecimal()
  public priceBottomRailDouble: number;

  @IsDecimal()
  public priceDivider: number;

  @IsDecimal()
  public priceTopProfile: number;

  @IsDecimal()
  @IsNotEmpty()
  public priceBottomProfile: number;

  @IsBoolean()
  public customColorAvailable: boolean;

  @IsBoolean()
  public isSilverGloss: boolean;

  @IsNotEmpty()
  public mechanism: CmsMechanisms;
}
