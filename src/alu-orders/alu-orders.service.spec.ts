import { Test, TestingModule } from '@nestjs/testing';
import { AluOrdersService } from './alu-orders.service';

describe('AluOrdersService', () => {
  let service: AluOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AluOrdersService],
    }).compile();

    service = module.get<AluOrdersService>(AluOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
