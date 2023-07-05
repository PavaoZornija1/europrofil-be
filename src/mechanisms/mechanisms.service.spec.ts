import { Test, TestingModule } from '@nestjs/testing';
import { MechanismsService } from './mechanisms.service';

describe('MechanismsService', () => {
  let service: MechanismsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MechanismsService],
    }).compile();

    service = module.get<MechanismsService>(MechanismsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
