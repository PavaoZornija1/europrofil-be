import { PartialType } from '@nestjs/swagger';
import { CreateAluFillDto } from './create-alu-fill.dto';

export class UpdateAluFillDto extends PartialType(CreateAluFillDto) {}
