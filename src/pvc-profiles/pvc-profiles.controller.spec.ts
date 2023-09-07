import { Test, TestingModule } from '@nestjs/testing';
import { PvcProfilesController } from './pvc-profiles.controller';
import { PvcProfilesService } from './pvc-profiles.service';

describe('PvcProfilesController', () => {
  let controller: PvcProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PvcProfilesController],
      providers: [PvcProfilesService],
    }).compile();

    controller = module.get<PvcProfilesController>(PvcProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
