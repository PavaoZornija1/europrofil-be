import { Test, TestingModule } from '@nestjs/testing';
import { DoorMechanismsService } from './door-mechanisms.service';

describe('DoorMechanismsService', () => {
  let service: DoorMechanismsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoorMechanismsService],
    }).compile();

    service = module.get<DoorMechanismsService>(DoorMechanismsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
