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
  public phone: string;

  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsBoolean()
  @IsNotEmpty()
  public isAdministrator: boolean;

  @IsString()
  @IsNotEmpty()
  public address: string;

  @IsString()
  @IsNotEmpty()
  public note: string;

  @IsString()
  public approvalStatus: ApprovalStatus;

  @IsOptional()
  public department: string;
}
