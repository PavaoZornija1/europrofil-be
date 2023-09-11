import { Test, TestingModule } from '@nestjs/testing';
import { SupportedProfilesService } from './supported-profiles.service';

describe('SupportedProfilesService', () => {
  let service: SupportedProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportedProfilesService],
    }).compile();

    service = module.get<SupportedProfilesService>(SupportedProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
