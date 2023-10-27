import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateHorizontalProfileDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNumber()
  @IsNotEmpty()
  public constantsThickness: number;

  @IsNumber()
  @IsNotEmpty()
  public constantsGlassGap: number;

  @IsNumber()
  @IsNotEmpty()
  public constantsWoodGap: number;

  public picture: any;

  public pic: any;

  @IsNotEmpty()
  public mechanisms: any[];
}
