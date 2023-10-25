import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateMechanismDto {
  // @IsString()
  // @IsNotEmpty()
  // public name: string;

  // @IsString()
  // @IsNotEmpty()
  // public productCode: string;

  // @IsNumber()
  // public ordering: number;

  // @IsNumber()
  // public constantsHeight: number;

  // @IsNumber()
  // public constantsHandrailHeight: number;

  // @IsNumber()
  // public constantsDeceleratorHeight: number;

  // @IsNumber()
  // public constantsProfileTopWood: number;

  // @IsNumber()
  // public constantsProfileTopGlass: number;

  // @IsNumber()
  // public constantsProfileBottomWood: number;

  // @IsNumber()
  // public constantsProfileBottomGlass: number;

  // @IsNumber()
  // public constantsSeparatorThickness: number;

  // @IsNumber()
  // public constantsSeparatorGlassGap: number;

  // @IsNumber()
  // public constantsSeparatorWoodGap: number;

  // @IsBoolean()
  // public pvcProfileAvailable: boolean;

  // @IsBoolean()
  // public thinningAvailable: boolean;

  // @IsBoolean()
  // public deceleratorSupport: boolean;

  // @IsBoolean()
  // public differentHandrails: boolean;

  // @IsBoolean()
  // public withoutTopAndBottomProfiles: boolean;

  // @IsNumber()
  // public loadMin: number;

  // @IsNumber()
  // public loadMax: number;

  // @IsNumber()
  // public widthMin: number;

  // @IsNumber()
  // public heavyThreshold: number;

  // @IsNumber()
  // public widthMax: number;

  // @IsNumber()
  // public heightMin: number;

  // @IsNumber()
  // public heightMax: number;

  // @IsNumber()
  // public fillThicknessMin: number;

  // @IsNumber()
  // public fillThicknessMax: number;

  // @IsString()
  // public fillTypes: string;

  // @IsString()
  // public detailsLink: string;

  // @IsNumber()
  // public confectionPricePerDoor: number;

  // @IsNumber()
  // public installationPricePerDoor: number;

  // @IsString()
  // public confectionProductCode: string;

  // @IsString()
  // public installationProductCode: string;

  // public picture: any;

  // public thinningPicture: any;
  @IsOptional()
  public name: string;

  @IsOptional()
  public productCode: string;

  @IsOptional()
  public ordering: number;

  @IsOptional()
  public constantsHeight: number;

  @IsOptional()
  public constantsHandrailHeight: number;

  @IsOptional()
  public constantsDeceleratorHeight: number;

  @IsOptional()
  public constantsProfileTopWood: number;

  @IsOptional()
  public constantsProfileTopGlass: number;

  @IsOptional()
  public constantsProfileBottomWood: number;

  @IsOptional()
  public constantsProfileBottomGlass: number;

  @IsOptional()
  public constantsSeparatorThickness: number;

  @IsOptional()
  public constantsSeparatorGlassGap: number;

  @IsOptional()
  public constantsSeparatorWoodGap: number;

  @IsOptional()
  public pvcProfileAvailable: string;

  @IsOptional()
  public thinningAvailable: string;

  @IsOptional()
  public deceleratorSupport: string;

  @IsOptional()
  public differentHandrails: string;

  @IsOptional()
  public withoutTopAndBottomProfiles: string;

  @IsOptional()
  public loadMin: number;

  @IsOptional()
  public loadMax: number;

  @IsOptional()
  public widthMin: number;

  @IsOptional()
  public heavyThreshold: number;

  @IsOptional()
  public widthMax: number;

  @IsOptional()
  public heightMin: number;

  @IsOptional()
  public heightMax: number;

  @IsOptional()
  public fillThicknessMin: number;

  @IsOptional()
  public fillThicknessMax: number;

  @IsOptional()
  public fillTypes: string;

  @IsOptional()
  public detailsLink: string;

  @IsOptional()
  public confectionPricePerDoor: number;

  @IsOptional()
  public installationPricePerDoor: number;

  @IsOptional()
  public confectionProductCode: string;

  @IsOptional()
  public installationProductCode: string;

  @IsOptional()
  public pic: any;

  @IsOptional()
  public thinningPic: any;
}
