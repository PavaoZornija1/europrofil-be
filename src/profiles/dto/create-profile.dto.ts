import { CmsHandrailDecorations, CmsHorizontalProfiles } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsNotEmpty()
  public handrailDecoration: CmsHandrailDecorations;

  @IsNotEmpty()
  public horizontalProfile: CmsHorizontalProfiles;
}
