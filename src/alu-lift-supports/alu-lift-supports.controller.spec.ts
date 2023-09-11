import { Test, TestingModule } from '@nestjs/testing';
import { AluLiftSupportsController } from './alu-lift-supports.controller';
import { AluLiftSupportsService } from './alu-lift-supports.service';

describe('AluLiftSupportsController', () => {
  let controller: AluLiftSupportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluLiftSupportsController],
      providers: [AluLiftSupportsService],
    }).compile();

    controller = module.get<AluLiftSupportsController>(AluLiftSupportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
