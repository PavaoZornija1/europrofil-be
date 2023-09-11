import { Test, TestingModule } from '@nestjs/testing';
import { AluFrameTreatmentsService } from './alu-frame-treatments.service';

describe('AluFrameTreatmentsService', () => {
  let service: AluFrameTreatmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluFrameTreatmentsService],
    }).compile();

    service = module.get<AluFrameTreatmentsService>(AluFrameTreatmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
