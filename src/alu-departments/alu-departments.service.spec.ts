import { Test, TestingModule } from '@nestjs/testing';
import { AluDepartmentsService } from './alu-departments.service';

describe('AluDepartmentsService', () => {
  let service: AluDepartmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluDepartmentsService],
    }).compile();

    service = module.get<AluDepartmentsService>(AluDepartmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
