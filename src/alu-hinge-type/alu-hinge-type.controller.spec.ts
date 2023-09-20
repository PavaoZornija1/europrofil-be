import { Test, TestingModule } from '@nestjs/testing';
import { AluHingeTypeController } from './alu-hinge-type.controller';
import { AluHingeTypeService } from './alu-hinge-type.service';

describe('AluHingeTypeController', () => {
  let controller: AluHingeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluHingeTypeController],
      providers: [AluHingeTypeService],
    }).compile();

    controller = module.get<AluHingeTypeController>(AluHingeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
