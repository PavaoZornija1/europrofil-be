import { Test, TestingModule } from '@nestjs/testing';
import { HandrailEndingsController } from './handrail-endings.controller';
import { HandrailEndingsService } from './handrail-endings.service';

describe('HandrailEndingsController', () => {
  let controller: HandrailEndingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandrailEndingsController],
      providers: [HandrailEndingsService],
    }).compile();

    controller = module.get<HandrailEndingsController>(HandrailEndingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
