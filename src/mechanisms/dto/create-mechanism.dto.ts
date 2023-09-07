import {
  IsString,
  IsNotEmpty,
  IsDecimal,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreateMechanismDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNumber()
  public ordering: number;

  @IsDecimal()
  public constantsHeight: number;

  @IsDecimal()
  public constantsHandrailHeight: number;

  @IsDecimal()
  public constantsDeceleratorHeight: number;

  @IsDecimal()
  public constantsProfileTopWood: number;

  @IsDecimal()
  public constantsProfileTopGlass: number;

  @IsDecimal()
  public constantsProfileBottomWood: number;

  @IsDecimal()
  public constantsProfileBottomGlass: number;

  @IsDecimal()
  public constantsSeparatorThickness: number;

  @IsDecimal()
  public constantsSeparatorGlassGap: number;

  @IsDecimal()
  public constantsSeparatorWoodGap: number;

  @IsBoolean()
  public pvcProfileAvailable: boolean;

  @IsBoolean()
  public thinningAvailable: boolean;

  @IsBoolean()
  public deceleratorSupport: boolean;

  @IsBoolean()
  public differentHandrails: boolean;

  @IsBoolean()
  public withoutTopAndBottomProfiles: boolean;

  @IsDecimal()
  public loadMin: number;

  @IsDecimal()
  public loadMax: number;

  @IsDecimal()
  public widthMin: number;

  @IsDecimal()
  public heavyThreshold: number;

  @IsDecimal()
  public widthMax: number;

  @IsDecimal()
  public heightMin: number;

  @IsDecimal()
  public heightMax: number;

  @IsDecimal()
  public fillThicknessMin: number;

  @IsDecimal()
  public fillThicknessMax: number;

  @IsString()
  public fillTypes: string;

  @IsString()
  public detailsLink: string;

  @IsDecimal()
  public confectionPricePerDoor: number;

  @IsDecimal()
  public installationPricePerDoor: number;

  @IsString()
  public confectionProductCode: string;

  @IsString()
  public installationProductCode: string;

  public picture: any;

  public thinningPicture: any;
}
