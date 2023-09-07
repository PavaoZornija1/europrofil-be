import { Module } from '@nestjs/common';
import { HorizontalProfilesService } from './horizontal-profiles.service';
import { HorizontalProfilesController } from './horizontal-profiles.controller';

@Module({
  controllers: [HorizontalProfilesController],
  providers: [HorizontalProfilesService]
})
export class HorizontalProfilesModule {}
