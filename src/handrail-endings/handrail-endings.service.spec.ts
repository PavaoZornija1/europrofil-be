import { Test, TestingModule } from '@nestjs/testing';
import { HandrailEndingsService } from './handrail-endings.service';

describe('HandrailEndingsService', () => {
  let service: HandrailEndingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandrailEndingsService],
    }).compile();

    service = module.get<HandrailEndingsService>(HandrailEndingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
