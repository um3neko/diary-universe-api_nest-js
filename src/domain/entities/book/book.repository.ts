import {Book} from './book.entity';

export interface IBookRepository {
	findBooksPreview(page: number, limit: number): Promise<Book[]>;
}
