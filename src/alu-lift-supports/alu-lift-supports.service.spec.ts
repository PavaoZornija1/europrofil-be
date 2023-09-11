import { Test, TestingModule } from '@nestjs/testing';
import { AluLiftSupportsService } from './alu-lift-supports.service';

describe('AluLiftSupportsService', () => {
  let service: AluLiftSupportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluLiftSupportsService],
    }).compile();

    service = module.get<AluLiftSupportsService>(AluLiftSupportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
