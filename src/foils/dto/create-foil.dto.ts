import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFoilDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsString()
  @IsNotEmpty()
  public colorCode: string;

  @IsString()
  @IsNotEmpty()
  public ralCode: string;
}
