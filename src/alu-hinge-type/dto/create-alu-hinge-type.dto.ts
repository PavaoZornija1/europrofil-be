import { IsString } from 'class-validator';

export class CreateAluHingeTypeDto {
  @IsString()
  name: string;

  @IsString()
  code: string;
}
