import {
  CmsMechanisms,
  CmsHandrails,
  CmsHandrailEndings,
} from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateHandrailEndingDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsOptional()
  public productCode: string;

  @IsNumber()
  @IsOptional()
  public pricePerM: number;

  @IsOptional()
  public mechanism: any[];

  @IsOptional()
  public handrail: any[];

  @IsOptional()
  public parent: any;
}
