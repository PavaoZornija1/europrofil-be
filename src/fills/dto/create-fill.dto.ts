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
  @IsNotEmpty()
  public productCode: string;

  @IsBoolean()
  @IsNotEmpty()
  public requiresPvcProfile: boolean;

  @IsBoolean()
  @IsNotEmpty()
  public requiresThinning: boolean;

  @IsBoolean()
  @IsNotEmpty()
  public customNameAllowed: boolean;

  @IsBoolean()
  @IsNotEmpty()
  public foilAvailable: boolean;

  @IsNumber()
  @IsNotEmpty()
  public pricePerMSquare: number;

  @IsOptional()
  public mechanism: any[];

  @IsOptional()
  public parent: any;
}
