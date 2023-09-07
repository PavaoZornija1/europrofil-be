import { Test, TestingModule } from '@nestjs/testing';
import { HandrailDecorationsController } from './handrail-decorations.controller';
import { HandrailDecorationsService } from './handrail-decorations.service';

describe('HandrailDecorationsController', () => {
  let controller: HandrailDecorationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandrailDecorationsController],
      providers: [HandrailDecorationsService],
    }).compile();

    controller = module.get<HandrailDecorationsController>(HandrailDecorationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
