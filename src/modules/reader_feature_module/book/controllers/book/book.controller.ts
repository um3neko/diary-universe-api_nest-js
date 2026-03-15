import {Controller, Get, Query} from '@nestjs/common';
import {BookChunksPreviewDtoResponse, BookPreviewDtoResponse} from '../../dto/bookPreviewDtoResponse';
import {BookService} from '../../services/book/book.service';
import { BookChapterOrmEntity } from 'src/infrastructure/entities/bookChapter/bookChapter.typeorm';

@Controller('book')
export class BookController {
	constructor(private bookService: BookService) {}

	//http://localhost:3000/book?page=1&limit=10
	@Get()
	async getBooks(
		@Query('page') page = 1,
		@Query('limit') limit = 10,
	): Promise<BookPreviewDtoResponse[]> {
		console.log(page);
		return this.bookService.getBooksPreview(page, limit);
	}

	@Get('preview/')
	async getBookChunksPreview(
		@Query('id') id
	): Promise<BookChapterOrmEntity[]> {
		console.log(id);
		return this.bookService.getBookChunksById(id);
	}
}
