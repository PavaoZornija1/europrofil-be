import { Module } from '@nestjs/common';
import { AluFrameTreatmentsService } from './alu-frame-treatments.service';
import { AluFrameTreatmentsController } from './alu-frame-treatments.controller';

@Module({
  controllers: [AluFrameTreatmentsController],
  providers: [AluFrameTreatmentsService]
})
export class AluFrameTreatmentsModule {}
