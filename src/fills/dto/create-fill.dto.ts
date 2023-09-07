import { CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateFillDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsBoolean()
  @IsNotEmpty()
  public requiresPvcProfile: boolean;

  @IsBoolean()
  @IsNotEmpty()
  public requiresThinning: boolean;

  @IsBoolean()
  @IsNotEmpty()
  public customNameAllowed: boolean;

  @IsBoolean()
  @IsNotEmpty()
  public foilAvailable: boolean;

  @IsNotEmpty()
  public mechanism: CmsMechanisms;
}
