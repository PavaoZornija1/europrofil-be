import { CmsAluFrameTypes, CmsHingeTypes } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAluHingeDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsNotEmpty()
  public hingeType: CmsHingeTypes;

  @IsNotEmpty()
  public frameTypes: CmsAluFrameTypes;

  @IsNotEmpty()
  public picture: any;
}
