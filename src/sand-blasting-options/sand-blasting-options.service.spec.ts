import { Test, TestingModule } from '@nestjs/testing';
import { SandBlastingOptionsService } from './sand-blasting-options.service';

describe('SandBlastingOptionsService', () => {
  let service: SandBlastingOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SandBlastingOptionsService],
    }).compile();

    service = module.get<SandBlastingOptionsService>(SandBlastingOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
