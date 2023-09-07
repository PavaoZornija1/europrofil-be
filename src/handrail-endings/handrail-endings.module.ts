import { Module } from '@nestjs/common';
import { HandrailEndingsService } from './handrail-endings.service';
import { HandrailEndingsController } from './handrail-endings.controller';

@Module({
  controllers: [HandrailEndingsController],
  providers: [HandrailEndingsService]
})
export class HandrailEndingsModule {}
