import { PartialType } from '@nestjs/swagger';
import { CreateHandrailEndingDto } from './create-handrail-ending.dto';

export class UpdateHandrailEndingDto extends PartialType(
  CreateHandrailEndingDto,
) {}
