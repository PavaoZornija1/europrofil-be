import { CmsDoorMechanisms, CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateHandrailDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public roundingSteps: string;

  @IsNumber()
  @IsNotEmpty()
  public doorWidth: number;

  @IsNumber()
  @IsNotEmpty()
  public profileLength: number;

  @IsNumber()
  @IsNotEmpty()
  public fillWidthGlass: number;

  @IsNumber()
  @IsNotEmpty()
  public fillWidthWood: number;

  @IsNotEmpty()
  public mechanisms: any[];

  @IsNotEmpty()
  public doorMechanisms: any[];

  @IsOptional()
  public pic: any;
}
