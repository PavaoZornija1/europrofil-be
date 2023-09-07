import { PartialType } from '@nestjs/swagger';
import { CreateAluSettingDto } from './create-alu-setting.dto';

export class UpdateAluSettingDto extends PartialType(CreateAluSettingDto) {}
