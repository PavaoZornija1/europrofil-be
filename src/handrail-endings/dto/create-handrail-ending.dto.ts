import {
  CmsMechanisms,
  CmsHandrails,
  CmsHandrailEndings,
} from '@prisma/client';
import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateHandrailEndingDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsDecimal()
  @IsNotEmpty()
  public doorWidth: number;

  @IsDecimal()
  @IsNotEmpty()
  public pricePerM: number;

  public mechanism: CmsMechanisms;

  public handrail: CmsHandrails;

  public parent: CmsHandrailEndings;
}
