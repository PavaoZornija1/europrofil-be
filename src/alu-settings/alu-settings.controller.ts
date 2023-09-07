import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { AluSettingsService } from './alu-settings.service';
import { UpdateAluSettingDto } from './dto/update-alu-setting.dto';

@Controller('alu-settings')
export class AluSettingsController {
  constructor(private readonly aluSettingsService: AluSettingsService) {}

  @Get()
  findAll() {
    return this.aluSettingsService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAluSettingDto: UpdateAluSettingDto,
  ) {
    return this.aluSettingsService.update(id, updateAluSettingDto);
  }
}
