import {Inject, Injectable} from '@nestjs/common';
import {
	BookChunksPreviewDtoResponse,
	BookPreviewDtoResponse,
} from '../../dto/bookPreviewDtoResponse';
import {
	TypeOrmBookRepository,
	TypeOrmBookRepositoryToken,
} from 'src/infrastructure/entities/book/book.typeorm.repository';
import { TypeOrmBookChapterRepository } from 'src/infrastructure/entities/bookChapter/bookChapter.typeorm.repository';
import { BookChapterOrmEntity } from 'src/infrastructure/entities/bookChapter/bookChapter.typeorm';

@Injectable()
export class BookService {
	constructor(
		@Inject(TypeOrmBookRepositoryToken)
		private readonly bookRepository: TypeOrmBookRepository,
		private readonly bookChapterRepository: TypeOrmBookChapterRepository,
	) {}

	async getBooksPreview(page: number, limit: number): Promise<BookPreviewDtoResponse[]> {
		const books = await this.bookRepository.findBooksPreview(page, limit);
		return books as BookPreviewDtoResponse[];
	}
	//TODO: return BookChunksPreviewDtoResponse not BookChunk
	async getBookChunksById(id: string): Promise<BookChapterOrmEntity[]> {
		const booksChunk = await this.bookChapterRepository.findBookChunksPreviewById(id);
		return booksChunk;
	}
}
