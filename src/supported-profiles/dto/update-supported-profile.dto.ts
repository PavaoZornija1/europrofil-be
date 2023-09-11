import { PartialType } from '@nestjs/swagger';
import { CreateSupportedProfileDto } from './create-supported-profile.dto';

export class UpdateSupportedProfileDto extends PartialType(CreateSupportedProfileDto) {}
