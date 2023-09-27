import { PartialType } from '@nestjs/swagger';
import { CreateBevelOptionDto } from './create-bevel-option.dto';

export class UpdateBevelOptionDto extends PartialType(CreateBevelOptionDto) {}
