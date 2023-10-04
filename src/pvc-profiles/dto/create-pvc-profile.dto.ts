import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

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
  @IsOptional()
  public ralCode: string;

  @IsNotEmpty()
  public mechanisms: any[];
}
