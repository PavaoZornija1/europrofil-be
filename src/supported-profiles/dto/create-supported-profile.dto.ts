import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateSupportedProfileDto {
  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsString()
  @IsOptional()
  public productCode: string;

  @IsNotEmpty()
  public horizontalProfile: string;

  @IsNotEmpty()
  public handrailDecoration: string;
}
