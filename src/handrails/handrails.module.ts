import { Module } from '@nestjs/common';
import { HandrailsService } from './handrails.service';
import { HandrailsController } from './handrails.controller';

@Module({
  controllers: [HandrailsController],
  providers: [HandrailsService]
})
export class HandrailsModule {}
