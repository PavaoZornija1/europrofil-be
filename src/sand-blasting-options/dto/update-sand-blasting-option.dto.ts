import { PartialType } from '@nestjs/swagger';
import { CreateSandBlastingOptionDto } from './create-sand-blasting-option.dto';

export class UpdateSandBlastingOptionDto extends PartialType(CreateSandBlastingOptionDto) {}
