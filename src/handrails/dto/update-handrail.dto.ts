import { PartialType } from '@nestjs/swagger';
import { CreateHandrailDto } from './create-handrail.dto';

export class UpdateHandrailDto extends PartialType(CreateHandrailDto) {}
