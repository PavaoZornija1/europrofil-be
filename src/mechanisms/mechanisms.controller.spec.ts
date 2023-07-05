import { Test, TestingModule } from '@nestjs/testing';
import { MechanismsController } from './mechanisms.controller';
import { MechanismsService } from './mechanisms.service';

describe('MechanismsController', () => {
  let controller: MechanismsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MechanismsController],
      providers: [MechanismsService],
    }).compile();

    controller = module.get<MechanismsController>(MechanismsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
