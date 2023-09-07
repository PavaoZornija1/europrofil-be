import { CmsHandrails, CmsHandrailDecorations } from '@prisma/client';
import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateSupportedDecorationDto {
  @IsDecimal()
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
