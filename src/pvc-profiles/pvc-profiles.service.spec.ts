import { Test, TestingModule } from '@nestjs/testing';
import { PvcProfilesService } from './pvc-profiles.service';

describe('PvcProfilesService', () => {
  let service: PvcProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PvcProfilesService],
    }).compile();

    service = module.get<PvcProfilesService>(PvcProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
