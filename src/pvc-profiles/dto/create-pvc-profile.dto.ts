import { CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreatePvcProfileDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsDecimal()
  @IsNotEmpty()
  public pricePerM: number;

  @IsString()
  @IsNotEmpty()
  public ralCode: string;

  @IsNotEmpty()
  public mechanism: CmsMechanisms;
}
