import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePvcProfileDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNumber()
  @IsNotEmpty()
  public pricePerM: number;

  @IsString()
  @IsNotEmpty()
  public ralCode: string;

  @IsNotEmpty()
  public mechanisms: any[];
}
