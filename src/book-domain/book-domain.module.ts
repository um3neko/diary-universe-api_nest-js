import { Module } from '@nestjs/common';
import { ImportController } from './controllers/import/import.controller';
import { ImportBookService } from './services/import-book/import-book.service';

@Module({
  controllers: [ImportController],
  providers: [ImportBookService]
})
export class BookDomainModule {}
