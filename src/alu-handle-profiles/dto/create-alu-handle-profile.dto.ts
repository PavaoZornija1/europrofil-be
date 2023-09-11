import { CmsAluFrameTypes } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateAluHandleProfileDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNumber()
  @IsNotEmpty()
  public frameLengthReduction: number;

  @IsBoolean()
  @IsNotEmpty()
  public customColorAvailable: boolean;

  @IsNumber()
  @IsNotEmpty()
  public pricePerMeter: number;

  @IsNumber()
  @IsNotEmpty()
  public priceIncrease: number;

  @IsNumber()
  @IsNotEmpty()
  public ordering: number;

  @IsNotEmpty()
  public frameTypes: CmsAluFrameTypes[];
}
