import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateSettingDto {
  @IsString()
  @IsNotEmpty()
  public orderEmail: string;

  @IsString()
  @IsNotEmpty()
  public currency: string;

  @IsDecimal()
  @IsNotEmpty()
  public vat: number;

  @IsString()
  @IsNotEmpty()
  public introText: string;
}
