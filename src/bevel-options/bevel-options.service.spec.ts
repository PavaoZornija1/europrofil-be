import { Test, TestingModule } from '@nestjs/testing';
import { BevelOptionsService } from './bevel-options.service';

describe('BevelOptionsService', () => {
  let service: BevelOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BevelOptionsService],
    }).compile();

    service = module.get<BevelOptionsService>(BevelOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
