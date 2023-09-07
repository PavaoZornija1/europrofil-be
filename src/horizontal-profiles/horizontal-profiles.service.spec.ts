import { Test, TestingModule } from '@nestjs/testing';
import { HorizontalProfilesService } from './horizontal-profiles.service';

describe('HorizontalProfilesService', () => {
  let service: HorizontalProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HorizontalProfilesService],
    }).compile();

    service = module.get<HorizontalProfilesService>(HorizontalProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
