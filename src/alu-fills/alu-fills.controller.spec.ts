import { Test, TestingModule } from '@nestjs/testing';
import { AluFillsController } from './alu-fills.controller';
import { AluFillsService } from './alu-fills.service';

describe('AluFillsController', () => {
  let controller: AluFillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluFillsController],
      providers: [AluFillsService],
    }).compile();

    controller = module.get<AluFillsController>(AluFillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
