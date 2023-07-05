import { PartialType } from '@nestjs/mapped-types';
import { CreateMechanismDto } from './create-mechanism.dto';

export class UpdateMechanismDto extends PartialType(CreateMechanismDto) {}
