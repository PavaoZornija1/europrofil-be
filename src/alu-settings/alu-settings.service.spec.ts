import { Test, TestingModule } from '@nestjs/testing';
import { AluSettingsService } from './alu-settings.service';

describe('AluSettingsService', () => {
  let service: AluSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluSettingsService],
    }).compile();

    service = module.get<AluSettingsService>(AluSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
