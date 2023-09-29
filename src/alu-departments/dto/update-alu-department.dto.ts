import { PartialType } from '@nestjs/swagger';
import { CreateAluDepartmentDto } from './create-alu-department.dto';

export class UpdateAluDepartmentDto extends PartialType(CreateAluDepartmentDto) {}
