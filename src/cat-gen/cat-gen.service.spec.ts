import { Test, TestingModule } from '@nestjs/testing';
import { CatGenService } from './cat-gen.service';

describe('CatGenService', () => {
  let service: CatGenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatGenService],
    }).compile();

    service = module.get<CatGenService>(CatGenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
