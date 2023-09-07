import { Module } from '@nestjs/common';
import { AluProfilesService } from './alu-profiles.service';
import { AluProfilesController } from './alu-profiles.controller';

@Module({
  controllers: [AluProfilesController],
  providers: [AluProfilesService]
})
export class AluProfilesModule {}
