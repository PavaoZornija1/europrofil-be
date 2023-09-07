import { Test, TestingModule } from '@nestjs/testing';
import { FoilsService } from './foils.service';

describe('FoilsService', () => {
  let service: FoilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoilsService],
    }).compile();

    service = module.get<FoilsService>(FoilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
