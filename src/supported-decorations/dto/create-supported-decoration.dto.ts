import { CmsHandrails, CmsHandrailDecorations } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSupportedDecorationDto {
  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNotEmpty()
  public handrail: CmsHandrails;

  @IsNotEmpty()
  public handrailDecoration: CmsHandrailDecorations;
}
