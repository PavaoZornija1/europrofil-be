import { CmsHorizontalProfiles, CmsHandrailDecorations } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSupportedProfileDto {
  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNotEmpty()
  public horizontalProfile: string;
  // public horizontalProfile: CmsHorizontalProfiles;

  @IsNotEmpty()
  public handrailDecoration: string;
  // public handrailDecoration: CmsHandrailDecorations;
}
