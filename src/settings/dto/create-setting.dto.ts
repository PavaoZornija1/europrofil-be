import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateSettingDto {
  @IsString()
  @IsNotEmpty()
  public isoDocument: string;

  @IsString()
  @IsNotEmpty()
  public orderEmail: string;

  @IsString()
  @IsNotEmpty()
  public currency: string;

  @IsNumber()
  @IsNotEmpty()
  public vat: number;

  @IsOptional()
  public introText: string;
}
