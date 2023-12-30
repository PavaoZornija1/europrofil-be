import { Module } from '@nestjs/common';
import { AluOrdersService } from './alu-orders.service';
import { AluOrdersController } from './alu-orders.controller';

@Module({
  controllers: [AluOrdersController],
  providers: [AluOrdersService]
})
export class AluOrdersModule {}
