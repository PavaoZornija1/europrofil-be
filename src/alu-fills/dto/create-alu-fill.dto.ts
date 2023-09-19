import { CmsAluFills, CmsAluFrameTypes } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateAluFillDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsBoolean()
  @IsNotEmpty()
  public foilAvailable: boolean;

  @IsNumber()
  @IsNotEmpty()
  public pricePerSquareMeter: number;

  @IsNumber()
  @IsNotEmpty()
  public priceIncrease: number;

  @IsNotEmpty()
  public frameType: any;

  @IsNotEmpty()
  public parent: any;
}
