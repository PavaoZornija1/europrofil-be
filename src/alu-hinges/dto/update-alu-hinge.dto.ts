import { PartialType } from '@nestjs/swagger';
import { CreateAluHingeDto } from './create-alu-hinge.dto';

export class UpdateAluHingeDto extends PartialType(CreateAluHingeDto) {}
