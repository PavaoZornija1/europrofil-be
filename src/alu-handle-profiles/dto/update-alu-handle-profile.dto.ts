import { PartialType } from '@nestjs/swagger';
import { CreateAluHandleProfileDto } from './create-alu-handle-profile.dto';

export class UpdateAluHandleProfileDto extends PartialType(CreateAluHandleProfileDto) {}
