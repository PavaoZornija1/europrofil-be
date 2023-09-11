import { Test, TestingModule } from '@nestjs/testing';
import { AluFillsService } from './alu-fills.service';

describe('AluFillsService', () => {
  let service: AluFillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluFillsService],
    }).compile();

    service = module.get<AluFillsService>(AluFillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
