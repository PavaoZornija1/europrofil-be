import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSettingDto {
  @IsString()
  @IsNotEmpty()
  public orderEmail: string;

  @IsString()
  @IsNotEmpty()
  public currency: string;

  @IsNumber()
  @IsNotEmpty()
  public vat: number;

  @IsString()
  @IsNotEmpty()
  public introText: string;
}
