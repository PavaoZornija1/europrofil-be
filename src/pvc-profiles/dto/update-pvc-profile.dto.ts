import { PartialType } from '@nestjs/swagger';
import { CreatePvcProfileDto } from './create-pvc-profile.dto';

export class UpdatePvcProfileDto extends PartialType(CreatePvcProfileDto) {}
