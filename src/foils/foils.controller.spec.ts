import { Test, TestingModule } from '@nestjs/testing';
import { FoilsController } from './foils.controller';
import { FoilsService } from './foils.service';

describe('FoilsController', () => {
  let controller: FoilsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoilsController],
      providers: [FoilsService],
    }).compile();

    controller = module.get<FoilsController>(FoilsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
