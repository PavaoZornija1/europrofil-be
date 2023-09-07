import { Test, TestingModule } from '@nestjs/testing';
import { AluSettingsController } from './alu-settings.controller';
import { AluSettingsService } from './alu-settings.service';

describe('AluSettingsController', () => {
  let controller: AluSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluSettingsController],
      providers: [AluSettingsService],
    }).compile();

    controller = module.get<AluSettingsController>(AluSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
