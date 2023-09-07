import { Test, TestingModule } from '@nestjs/testing';
import { HorizontalProfilesController } from './horizontal-profiles.controller';
import { HorizontalProfilesService } from './horizontal-profiles.service';

describe('HorizontalProfilesController', () => {
  let controller: HorizontalProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorizontalProfilesController],
      providers: [HorizontalProfilesService],
    }).compile();

    controller = module.get<HorizontalProfilesController>(HorizontalProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
