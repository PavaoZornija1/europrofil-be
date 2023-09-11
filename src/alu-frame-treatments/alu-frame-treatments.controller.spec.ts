import { Test, TestingModule } from '@nestjs/testing';
import { AluFrameTreatmentsController } from './alu-frame-treatments.controller';
import { AluFrameTreatmentsService } from './alu-frame-treatments.service';

describe('AluFrameTreatmentsController', () => {
  let controller: AluFrameTreatmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluFrameTreatmentsController],
      providers: [AluFrameTreatmentsService],
    }).compile();

    controller = module.get<AluFrameTreatmentsController>(AluFrameTreatmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
