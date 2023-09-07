import { Module } from '@nestjs/common';
import { FillsService } from './fills.service';
import { FillsController } from './fills.controller';

@Module({
  controllers: [FillsController],
  providers: [FillsService]
})
export class FillsModule {}
