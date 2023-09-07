import { Test, TestingModule } from '@nestjs/testing';
import { DoorMechanismsController } from './door-mechanisms.controller';
import { DoorMechanismsService } from './door-mechanisms.service';

describe('DoorMechanismsController', () => {
  let controller: DoorMechanismsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoorMechanismsController],
      providers: [DoorMechanismsService],
    }).compile();

    controller = module.get<DoorMechanismsController>(DoorMechanismsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
