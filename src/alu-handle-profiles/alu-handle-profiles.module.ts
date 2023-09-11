import { Module } from '@nestjs/common';
import { AluHandleProfilesService } from './alu-handle-profiles.service';
import { AluHandleProfilesController } from './alu-handle-profiles.controller';

@Module({
  controllers: [AluHandleProfilesController],
  providers: [AluHandleProfilesService]
})
export class AluHandleProfilesModule {}
