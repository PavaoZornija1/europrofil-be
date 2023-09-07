import { Module } from '@nestjs/common';
import { HandrailDecorationsService } from './handrail-decorations.service';
import { HandrailDecorationsController } from './handrail-decorations.controller';

@Module({
  controllers: [HandrailDecorationsController],
  providers: [HandrailDecorationsService]
})
export class HandrailDecorationsModule {}
