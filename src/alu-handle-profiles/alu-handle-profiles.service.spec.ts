import { Test, TestingModule } from '@nestjs/testing';
import { AluHandleProfilesService } from './alu-handle-profiles.service';

describe('AluHandleProfilesService', () => {
  let service: AluHandleProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluHandleProfilesService],
    }).compile();

    service = module.get<AluHandleProfilesService>(AluHandleProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
