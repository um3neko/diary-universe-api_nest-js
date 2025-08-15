import {Inject, Injectable} from '@nestjs/common';
import {BookPreviewDtoResponse} from '../../dto/bookPreviewDtoResponse';
import {
	TypeOrmBookRepository,
	TypeOrmBookRepositoryToken,
} from 'src/infrastructure/entities/book/book.typeorm.repository';

@Injectable()
export class BookService {
	constructor(
		@Inject(TypeOrmBookRepositoryToken)
		private readonly bookRepository: TypeOrmBookRepository,
	) {}

	async getBooksPreview(page: number, limit: number): Promise<BookPreviewDtoResponse[]> {
		const books = await this.bookRepository.findBooksPreview(page, limit);
		console.log(books);
		return books.map(book => ({
			id: book.id,
			title: book.title,
			author: book.author,
			// tag: book.tag,
			// cover: book.cover,
			// wordCount: book.wordCount ?? null,
			wordLearned: null,
			createdAt: book.createdAt,
		}));
	}
}
