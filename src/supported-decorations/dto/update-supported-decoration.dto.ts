import { PartialType } from '@nestjs/swagger';
import { CreateSupportedDecorationDto } from './create-supported-decoration.dto';

export class UpdateSupportedDecorationDto extends PartialType(
  CreateSupportedDecorationDto,
) {}
