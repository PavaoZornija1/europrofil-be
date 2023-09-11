import { PartialType } from '@nestjs/swagger';
import { CreateAluLiftSupportDto } from './create-alu-lift-support.dto';

export class UpdateAluLiftSupportDto extends PartialType(CreateAluLiftSupportDto) {}
