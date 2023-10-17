import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFoilDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsOptional()
  public productCode: string;

  @IsString()
  @IsOptional()
  public colorCode: string;

  @IsString()
  @IsOptional()
  public ralCode: string;
}
