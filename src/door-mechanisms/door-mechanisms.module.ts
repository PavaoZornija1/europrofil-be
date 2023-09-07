import { Module } from '@nestjs/common';
import { DoorMechanismsService } from './door-mechanisms.service';
import { DoorMechanismsController } from './door-mechanisms.controller';

@Module({
  controllers: [DoorMechanismsController],
  providers: [DoorMechanismsService]
})
export class DoorMechanismsModule {}
