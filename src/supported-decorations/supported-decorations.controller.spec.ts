import { Test, TestingModule } from '@nestjs/testing';
import { SupportedDecorationsController } from './supported-decorations.controller';
import { SupportedDecorationsService } from './supported-decorations.service';

describe('SupportedDecorationsController', () => {
  let controller: SupportedDecorationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportedDecorationsController],
      providers: [SupportedDecorationsService],
    }).compile();

    controller = module.get<SupportedDecorationsController>(SupportedDecorationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
