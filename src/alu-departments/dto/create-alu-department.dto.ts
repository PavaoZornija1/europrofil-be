import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAluDepartmentDto {
  @IsString()
  @IsNotEmpty()
  public name: string;
}
