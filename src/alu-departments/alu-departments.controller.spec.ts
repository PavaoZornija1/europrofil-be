import { Test, TestingModule } from '@nestjs/testing';
import { AluDepartmentsController } from './alu-departments.controller';
import { AluDepartmentsService } from './alu-departments.service';

describe('AluDepartmentsController', () => {
  let controller: AluDepartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluDepartmentsController],
      providers: [AluDepartmentsService],
    }).compile();

    controller = module.get<AluDepartmentsController>(AluDepartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
