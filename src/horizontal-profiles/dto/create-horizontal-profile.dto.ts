import { IsOptional } from 'class-validator';

export class CreateHorizontalProfileDto {
  @IsOptional()
  public name: any;

  @IsOptional()
  public constantsThickness: any;

  @IsOptional()
  public constantsGlassGap: any;

  @IsOptional()
  public constantsWoodGap: any;

  @IsOptional()
  public pic: any;

  @IsOptional()
  public mechanisms: any;
}
