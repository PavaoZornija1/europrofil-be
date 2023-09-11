import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  public name: string;
}
