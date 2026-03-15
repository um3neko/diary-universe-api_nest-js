import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {BookOrmEntity} from 'src/infrastructure/entities/book/book.typeorm';
import {ExtensionOrmEntity} from 'src/infrastructure/entities/extension/extension.typeorm';

import {
	TypeOrmBookRepository,
	TypeOrmBookRepositoryToken,
} from 'src/infrastructure/entities/book/book.typeorm.repository';

import {BookService} from './services/book/book.service';
import {BookController} from './controllers/book/book.controller';
import {LanguageOrmEntity} from 'src/infrastructure/entities/language/language.typeorm';
import { TypeOrmBookChapterRepository, TypeOrmBookChapterRepositoryToken } from 'src/infrastructure/entities/bookChapter/bookChapter.typeorm.repository';
import { BookChapterOrmEntity } from 'src/infrastructure/entities/bookChapter/bookChapter.typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([BookOrmEntity, BookChapterOrmEntity, ExtensionOrmEntity, LanguageOrmEntity])],
	controllers: [BookController],
	providers: [
		BookService,
		TypeOrmBookRepository,
		{
			provide: TypeOrmBookRepositoryToken,
			useExisting: TypeOrmBookRepository,
		},
		TypeOrmBookChapterRepository, {
			provide: TypeOrmBookChapterRepositoryToken,
			useExisting: TypeOrmBookChapterRepository
		}
	],
	exports: [
		BookService,
		{
			provide: TypeOrmBookRepositoryToken,
			useExisting: TypeOrmBookRepository,
		},
	],
})
export class BookModule {}
