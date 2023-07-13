import { Test, TestingModule } from '@nestjs/testing';
import { HandrailsController } from './handrails.controller';
import { HandrailsService } from './handrails.service';

describe('HandrailsController', () => {
  let controller: HandrailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandrailsController],
      providers: [HandrailsService],
    }).compile();

    controller = module.get<HandrailsController>(HandrailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
