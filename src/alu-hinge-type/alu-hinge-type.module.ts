import { Module } from '@nestjs/common';
import { AluHingeTypeService } from './alu-hinge-type.service';
import { AluHingeTypeController } from './alu-hinge-type.controller';

@Module({
  controllers: [AluHingeTypeController],
  providers: [AluHingeTypeService]
})
export class AluHingeTypeModule {}
