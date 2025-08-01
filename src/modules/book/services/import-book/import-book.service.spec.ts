import { Test, TestingModule } from '@nestjs/testing';
import { ImportBookService } from './import-book.service';

describe('ImportBookService', () => {
  let service: ImportBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportBookService],
    }).compile();

    service = module.get<ImportBookService>(ImportBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
