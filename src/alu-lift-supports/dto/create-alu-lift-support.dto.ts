import { CmsAluFrameTypes } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAluLiftSupportDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsString()
  public description: string;

  @IsNumber()
  @IsNotEmpty()
  public pricePerUnit: number;

  @IsNumber()
  @IsNotEmpty()
  public ordering: number;

  @IsNotEmpty()
  public frameTypes: any[];

  @IsNotEmpty()
  public picture: any;
}
