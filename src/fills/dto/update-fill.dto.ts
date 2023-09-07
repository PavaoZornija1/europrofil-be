import { PartialType } from '@nestjs/swagger';
import { CreateFillDto } from './create-fill.dto';

export class UpdateFillDto extends PartialType(CreateFillDto) {}
