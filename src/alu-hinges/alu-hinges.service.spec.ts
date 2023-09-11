import { Test, TestingModule } from '@nestjs/testing';
import { AluHingesService } from './alu-hinges.service';

describe('AluHingesService', () => {
  let service: AluHingesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluHingesService],
    }).compile();

    service = module.get<AluHingesService>(AluHingesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
