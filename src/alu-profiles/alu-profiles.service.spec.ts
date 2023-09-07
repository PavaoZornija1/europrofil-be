import { Test, TestingModule } from '@nestjs/testing';
import { AluProfilesService } from './alu-profiles.service';

describe('AluProfilesService', () => {
  let service: AluProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluProfilesService],
    }).compile();

    service = module.get<AluProfilesService>(AluProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
