import { Test, TestingModule } from '@nestjs/testing';
import { HandrailDecorationsService } from './handrail-decorations.service';

describe('HandrailDecorationsService', () => {
  let service: HandrailDecorationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandrailDecorationsService],
    }).compile();

    service = module.get<HandrailDecorationsService>(HandrailDecorationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
