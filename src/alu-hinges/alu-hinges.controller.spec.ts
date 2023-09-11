import { Test, TestingModule } from '@nestjs/testing';
import { AluHingesController } from './alu-hinges.controller';
import { AluHingesService } from './alu-hinges.service';

describe('AluHingesController', () => {
  let controller: AluHingesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluHingesController],
      providers: [AluHingesService],
    }).compile();

    controller = module.get<AluHingesController>(AluHingesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
