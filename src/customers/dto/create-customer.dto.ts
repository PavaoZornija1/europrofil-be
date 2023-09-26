import { ApprovalStatus } from '@prisma/client';
import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsOptional()
  public name: string;

  @IsString()
  @IsOptional()
  public email: string;

  @IsString()
  @IsOptional()
  public phone: string;

  @IsString()
  @IsOptional()
  public username: string;

  @IsString()
  @IsOptional()
  public password: string;

  @IsBoolean()
  @IsOptional()
  public isAdministrator: boolean;

  @IsString()
  @IsOptional()
  public address: string;

  @IsString()
  @IsOptional()
  public deliveryAddress: string;

  @IsOptional()
  @IsBoolean()
  public lockedDiscounts?: boolean;

  @IsOptional()
  public discount?: number;

  @IsOptional()
  @IsBoolean()
  public useDetailedBilling?: boolean;

  @IsString()
  @IsOptional()
  public note: string;

  @IsString()
  public approvalStatus: ApprovalStatus;
}
