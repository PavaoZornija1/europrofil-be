import { CmsDoorMechanisms, CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateHandrailDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public roundingSteps: string;

  @IsOptional()
  public doorWidth: number;

  @IsOptional()
  public profileLength: number;

  @IsOptional()
  public fillWidthGlass: number;

  @IsOptional()
  public fillWidthWood: number;

  @IsNotEmpty()
  public mechanisms: any;

  @IsNotEmpty()
  public doorMechanisms: any;

  @IsOptional()
  public pic: any;
}
