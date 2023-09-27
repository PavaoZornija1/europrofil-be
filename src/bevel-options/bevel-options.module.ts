import { Module } from '@nestjs/common';
import { BevelOptionsService } from './bevel-options.service';
import { BevelOptionsController } from './bevel-options.controller';

@Module({
  controllers: [BevelOptionsController],
  providers: [BevelOptionsService]
})
export class BevelOptionsModule {}
