import { Test, TestingModule } from '@nestjs/testing';
import { AluHandleProfilesController } from './alu-handle-profiles.controller';
import { AluHandleProfilesService } from './alu-handle-profiles.service';

describe('AluHandleProfilesController', () => {
  let controller: AluHandleProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluHandleProfilesController],
      providers: [AluHandleProfilesService],
    }).compile();

    controller = module.get<AluHandleProfilesController>(AluHandleProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
