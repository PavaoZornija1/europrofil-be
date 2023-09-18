import { CmsFills, CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

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

  @IsNotEmpty()
  public mechanism: any;

  @IsNotEmpty()
  public parent: any;
}
