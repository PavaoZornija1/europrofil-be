import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateSupportedDecorationDto {
  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsString()
  @IsOptional()
  public productCode: string;

  @IsNotEmpty()
  public handrail: any;

  @IsNotEmpty()
  public handrailDecoration: any;
}
