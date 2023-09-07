import { PartialType } from '@nestjs/swagger';
import { CreateHandrailDecorationDto } from './create-handrail-decoration.dto';

export class UpdateHandrailDecorationDto extends PartialType(CreateHandrailDecorationDto) {}
