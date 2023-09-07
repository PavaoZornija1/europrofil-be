import { Test, TestingModule } from '@nestjs/testing';
import { SupportedDecorationsService } from './supported-decorations.service';

describe('SupportedDecorationsService', () => {
  let service: SupportedDecorationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportedDecorationsService],
    }).compile();

    service = module.get<SupportedDecorationsService>(SupportedDecorationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
