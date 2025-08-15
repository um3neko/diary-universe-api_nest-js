import {Controller, Get, Query} from '@nestjs/common';
import {BookPreviewDtoResponse} from '../../dto/bookPreviewDtoResponse';
import {BookService} from '../../services/book/book.service';

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
}
