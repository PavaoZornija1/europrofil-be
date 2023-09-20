import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAluHingeDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public productCode: string;

  @IsNumber()
  @IsNotEmpty()
  public price: number;

  @IsNotEmpty()
  public hingeType: string;

  @IsNotEmpty()
  public frameTypes: any[];

  @IsNotEmpty()
  public picture: any;
}
