import { Module } from '@nestjs/common';
import { PvcProfilesService } from './pvc-profiles.service';
import { PvcProfilesController } from './pvc-profiles.controller';

@Module({
  controllers: [PvcProfilesController],
  providers: [PvcProfilesService]
})
export class PvcProfilesModule {}
