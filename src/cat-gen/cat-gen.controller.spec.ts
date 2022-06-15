import { Test, TestingModule } from '@nestjs/testing';
import { CatGenController } from './cat-gen.controller';

describe('CatGenController', () => {
  let controller: CatGenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatGenController],
    }).compile();

    controller = module.get<CatGenController>(CatGenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
