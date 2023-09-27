import { Test, TestingModule } from '@nestjs/testing';
import { BevelOptionsController } from './bevel-options.controller';
import { BevelOptionsService } from './bevel-options.service';

describe('BevelOptionsController', () => {
  let controller: BevelOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BevelOptionsController],
      providers: [BevelOptionsService],
    }).compile();

    controller = module.get<BevelOptionsController>(BevelOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
