import { PartialType } from '@nestjs/swagger';
import { CreateAluFrameTreatmentDto } from './create-alu-frame-treatment.dto';

export class UpdateAluFrameTreatmentDto extends PartialType(CreateAluFrameTreatmentDto) {}
