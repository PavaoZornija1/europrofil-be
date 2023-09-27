import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateAluProfileDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNumber()
  public ordering: number;

  @IsString()
  public cornerCoverProductCode: string;

  @IsNumber()
  public cornerCoverPrice: number;

  @IsNumber()
  public pricePerMeter: number;

  @IsNumber()
  public priceIncrease: number;

  @IsBoolean()
  public requiresKp: boolean;

  @IsBoolean()
  public requiresPvc: boolean;

  @IsBoolean()
  public requiresSpecialHinges: boolean;

  @IsNumber()
  public fillingWidthReduction: number;

  @IsNumber()
  public fillingHeightReduction: number;

  @IsNumber()
  public handleHoleInlet: number;

  @IsNumber()
  public handleHoleOffset: number;

  @IsString()
  public detailsLink: string;
}
