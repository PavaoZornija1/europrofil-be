import { CmsMechanisms } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateDoorMechanismDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsBoolean()
  public deceleratorSupport: boolean;

  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsString()
  public deceleratorOpposites?: string;

  @IsNotEmpty()
  public mechanism: CmsMechanisms;
}
