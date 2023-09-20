import { PartialType } from '@nestjs/swagger';
import { CreateAluHingeTypeDto } from './create-alu-hinge-type.dto';

export class UpdateAluHingeTypeDto extends PartialType(CreateAluHingeTypeDto) {}
