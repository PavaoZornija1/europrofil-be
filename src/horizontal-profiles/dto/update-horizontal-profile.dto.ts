import { PartialType } from '@nestjs/swagger';
import { CreateHorizontalProfileDto } from './create-horizontal-profile.dto';

export class UpdateHorizontalProfileDto extends PartialType(
  CreateHorizontalProfileDto,
) {}
