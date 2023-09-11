import { Module } from '@nestjs/common';
import { SupportedProfilesService } from './supported-profiles.service';
import { SupportedProfilesController } from './supported-profiles.controller';

@Module({
  controllers: [SupportedProfilesController],
  providers: [SupportedProfilesService]
})
export class SupportedProfilesModule {}
