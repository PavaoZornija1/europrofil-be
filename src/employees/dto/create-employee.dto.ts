import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsOptional()
  public address: string;

  @IsOptional()
  public note: string;

  @IsOptional()
  public phone: string;

  @IsString()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsOptional()
  public department: string;
}
