import { Test, TestingModule } from '@nestjs/testing';
import { HandrailsService } from './handrails.service';

describe('HandrailsService', () => {
  let service: HandrailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandrailsService],
    }).compile();

    service = module.get<HandrailsService>(HandrailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
