import { Test, TestingModule } from '@nestjs/testing';
import { AluProfilesController } from './alu-profiles.controller';
import { AluProfilesService } from './alu-profiles.service';

describe('AluProfilesController', () => {
  let controller: AluProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AluProfilesController],
      providers: [AluProfilesService],
    }).compile();

    controller = module.get<AluProfilesController>(AluProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
