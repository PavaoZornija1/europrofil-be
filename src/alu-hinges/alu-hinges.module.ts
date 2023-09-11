import { Module } from '@nestjs/common';
import { AluHingesService } from './alu-hinges.service';
import { AluHingesController } from './alu-hinges.controller';

@Module({
  controllers: [AluHingesController],
  providers: [AluHingesService]
})
export class AluHingesModule {}
