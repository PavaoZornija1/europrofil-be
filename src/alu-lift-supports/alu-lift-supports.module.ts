import { Module } from '@nestjs/common';
import { AluLiftSupportsService } from './alu-lift-supports.service';
import { AluLiftSupportsController } from './alu-lift-supports.controller';

@Module({
  controllers: [AluLiftSupportsController],
  providers: [AluLiftSupportsService]
})
export class AluLiftSupportsModule {}
