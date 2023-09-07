import { Module } from '@nestjs/common';
import { FoilsService } from './foils.service';
import { FoilsController } from './foils.controller';

@Module({
  controllers: [FoilsController],
  providers: [FoilsService]
})
export class FoilsModule {}
