import { CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

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

  @IsNumber()
  public priceTopRailSingle: number;

  @IsNumber()
  public priceTopRailDouble: number;

  @IsNumber()
  public priceBottomRailSingle: number;

  @IsNumber()
  public priceBottomRailDouble: number;

  @IsNumber()
  public priceDivider: number;

  @IsNumber()
  public priceTopProfile: number;

  @IsNumber()
  @IsNotEmpty()
  public priceBottomProfile: number;

  @IsBoolean()
  public customColorAvailable: boolean;

  @IsBoolean()
  public isSilverGloss: boolean;

  @IsNotEmpty()
  public mechanism: any[];
}
