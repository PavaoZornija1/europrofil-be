import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSupportedProfileDto {
  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNotEmpty()
  public horizontalProfile: string;

  @IsNotEmpty()
  public handrailDecoration: string;
}
