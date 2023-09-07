import { PartialType } from '@nestjs/swagger';
import { CreateDoorMechanismDto } from './create-door-mechanism.dto';

export class UpdateDoorMechanismDto extends PartialType(CreateDoorMechanismDto) {}
