import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateAluFrameTreatmentDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  // @IsNumber()
  // public ordering: number;

  @IsBoolean()
  public customColorAvailable: boolean;

  @IsNumber()
  public pricePerMeter: number;

  @IsNumber()
  public priceIncrease: number;

  @IsNotEmpty()
  public frameTypes: any[];
}
