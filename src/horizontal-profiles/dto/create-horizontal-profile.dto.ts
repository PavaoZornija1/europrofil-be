import { CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateHorizontalProfileDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsDecimal()
  @IsNotEmpty()
  public constantsThickness: number;

  @IsDecimal()
  @IsNotEmpty()
  public constantsGlassGap: number;

  @IsDecimal()
  @IsNotEmpty()
  public constantsWoodGap: number;

  @IsNotEmpty()
  public picture: any;

  @IsNotEmpty()
  public mechanism: CmsMechanisms;
}
