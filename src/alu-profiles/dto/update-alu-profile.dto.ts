import { PartialType } from '@nestjs/swagger';
import { CreateAluProfileDto } from './create-alu-profile.dto';

export class UpdateAluProfileDto extends PartialType(CreateAluProfileDto) {}
