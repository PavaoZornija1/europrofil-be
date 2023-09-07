import {
  IsString,
  IsNotEmpty,
  IsNumber,
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

  @IsNumber()
  public constantsHeight: number;

  @IsNumber()
  public constantsHandrailHeight: number;

  @IsNumber()
  public constantsDeceleratorHeight: number;

  @IsNumber()
  public constantsProfileTopWood: number;

  @IsNumber()
  public constantsProfileTopGlass: number;

  @IsNumber()
  public constantsProfileBottomWood: number;

  @IsNumber()
  public constantsProfileBottomGlass: number;

  @IsNumber()
  public constantsSeparatorThickness: number;

  @IsNumber()
  public constantsSeparatorGlassGap: number;

  @IsNumber()
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

  @IsNumber()
  public loadMin: number;

  @IsNumber()
  public loadMax: number;

  @IsNumber()
  public widthMin: number;

  @IsNumber()
  public heavyThreshold: number;

  @IsNumber()
  public widthMax: number;

  @IsNumber()
  public heightMin: number;

  @IsNumber()
  public heightMax: number;

  @IsNumber()
  public fillThicknessMin: number;

  @IsNumber()
  public fillThicknessMax: number;

  @IsString()
  public fillTypes: string;

  @IsString()
  public detailsLink: string;

  @IsNumber()
  public confectionPricePerDoor: number;

  @IsNumber()
  public installationPricePerDoor: number;

  @IsString()
  public confectionProductCode: string;

  @IsString()
  public installationProductCode: string;

  public picture: any;

  public thinningPicture: any;
}
