import { ApprovalStatus, CmsDepartments } from '@prisma/client';
import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsOptional()
  public department: string;
}
