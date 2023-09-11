import { Test, TestingModule } from '@nestjs/testing';
import { SupportedProfilesController } from './supported-profiles.controller';
import { SupportedProfilesService } from './supported-profiles.service';

describe('SupportedProfilesController', () => {
  let controller: SupportedProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportedProfilesController],
      providers: [SupportedProfilesService],
    }).compile();

    controller = module.get<SupportedProfilesController>(SupportedProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
