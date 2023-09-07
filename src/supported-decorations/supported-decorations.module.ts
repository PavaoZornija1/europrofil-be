import { Module } from '@nestjs/common';
import { SupportedDecorationsService } from './supported-decorations.service';
import { SupportedDecorationsController } from './supported-decorations.controller';

@Module({
  controllers: [SupportedDecorationsController],
  providers: [SupportedDecorationsService]
})
export class SupportedDecorationsModule {}
