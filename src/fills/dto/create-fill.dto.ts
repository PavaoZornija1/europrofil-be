import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateFillDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsOptional()
  public productCode: string;

  @IsBoolean()
  @IsOptional()
  public requiresPvcProfile: boolean;

  @IsBoolean()
  @IsOptional()
  public requiresThinning: boolean;

  @IsBoolean()
  @IsOptional()
  public customNameAllowed: boolean;

  @IsBoolean()
  @IsOptional()
  public foilAvailable: boolean;

  @IsBoolean()
  @IsOptional()
  public isGlass: boolean;

  @IsBoolean()
  @IsOptional()
  public isWood: boolean;

  @IsNumber()
  @IsOptional()
  public pricePerMSquare: number;

  @IsOptional()
  public mechanism: any[];

  @IsOptional()
  public parent: any;
}
