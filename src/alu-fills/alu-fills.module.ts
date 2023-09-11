import { Module } from '@nestjs/common';
import { AluFillsService } from './alu-fills.service';
import { AluFillsController } from './alu-fills.controller';

@Module({
  controllers: [AluFillsController],
  providers: [AluFillsService]
})
export class AluFillsModule {}
