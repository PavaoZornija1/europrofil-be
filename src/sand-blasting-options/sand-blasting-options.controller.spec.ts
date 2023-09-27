import { Test, TestingModule } from '@nestjs/testing';
import { SandBlastingOptionsController } from './sand-blasting-options.controller';
import { SandBlastingOptionsService } from './sand-blasting-options.service';

describe('SandBlastingOptionsController', () => {
  let controller: SandBlastingOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SandBlastingOptionsController],
      providers: [SandBlastingOptionsService],
    }).compile();

    controller = module.get<SandBlastingOptionsController>(SandBlastingOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
