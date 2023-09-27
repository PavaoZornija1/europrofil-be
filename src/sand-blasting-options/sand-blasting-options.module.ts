import { Module } from '@nestjs/common';
import { SandBlastingOptionsService } from './sand-blasting-options.service';
import { SandBlastingOptionsController } from './sand-blasting-options.controller';

@Module({
  controllers: [SandBlastingOptionsController],
  providers: [SandBlastingOptionsService]
})
export class SandBlastingOptionsModule {}
