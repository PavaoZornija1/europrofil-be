import { Module } from '@nestjs/common';
import { AluSettingsService } from './alu-settings.service';
import { AluSettingsController } from './alu-settings.controller';

@Module({
  controllers: [AluSettingsController],
  providers: [AluSettingsService]
})
export class AluSettingsModule {}
