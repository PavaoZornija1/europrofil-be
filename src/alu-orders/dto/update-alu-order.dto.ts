import { PartialType } from '@nestjs/swagger';
import { CreateAluOrderDto } from './create-alu-order.dto';

export class UpdateAluOrderDto extends PartialType(CreateAluOrderDto) {}
