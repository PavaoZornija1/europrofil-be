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

  @IsNotEmpty()
  public deceleratorOpposites?: string[];

  @IsNotEmpty()
  public mechanism: any[];
}
