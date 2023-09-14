import {
  CmsMechanisms,
  CmsHandrails,
  CmsHandrailEndings,
} from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateHandrailEndingDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNumber()
  @IsNotEmpty()
  public pricePerM: number;

  public mechanism: CmsMechanisms;

  public handrail: CmsHandrails;

  public parent: CmsHandrailEndings;
}
