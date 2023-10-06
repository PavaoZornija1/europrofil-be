import { CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateExtraDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsString()
  @IsNotEmpty()
  public unit: string;

  @IsNumber()
  @IsNotEmpty()
  public pricePerUnit: number;

  @IsNotEmpty()
  public mechanisms: any[];
}
