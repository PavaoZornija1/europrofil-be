import { CmsHandrailDecorations, CmsHorizontalProfiles } from '@prisma/client';
import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsDecimal()
  @IsNotEmpty()
  public price: number;

  @IsNotEmpty()
  public handrailDecoration: CmsHandrailDecorations;

  @IsNotEmpty()
  public horizontalProfile: CmsHorizontalProfiles;
}
