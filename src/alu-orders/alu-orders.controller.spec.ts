import { Test, TestingModule } from '@nestjs/testing';
import { AluOrdersController } from './alu-orders.controller';
import { AluOrdersService } from './alu-orders.service';

describe('AluOrdersController', () => {
  let controller: AluOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluOrdersController],
      providers: [AluOrdersService],
    }).compile();

    controller = module.get<AluOrdersController>(AluOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
