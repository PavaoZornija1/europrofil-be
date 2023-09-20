import { Test, TestingModule } from '@nestjs/testing';
import { AluHingeTypeService } from './alu-hinge-type.service';

describe('AluHingeTypeService', () => {
  let service: AluHingeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluHingeTypeService],
    }).compile();

    service = module.get<AluHingeTypeService>(AluHingeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
