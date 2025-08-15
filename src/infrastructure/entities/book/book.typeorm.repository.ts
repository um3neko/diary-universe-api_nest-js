import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Book} from 'src/domain/entities/book/book.entity';
import {BaseRepository} from 'src/infrastructure/base/baseRepository';
import {BookMapper} from './book.mapper';
import {BookOrmEntity} from './book.typeorm';
import {IBookRepository} from 'src/domain/entities/book/book.repository';

export const TypeOrmBookRepositoryToken = Symbol('TypeOrmBookRepository');

@Injectable()
export class TypeOrmBookRepository
	extends BaseRepository<BookOrmEntity, Book>
	implements IBookRepository
{
	constructor(
		@InjectRepository(BookOrmEntity)
		repo: Repository<BookOrmEntity>,
	) {
		super(repo, BookMapper);
	}

	async findBooksPreview(page: number, limit: number): Promise<Book[]> {
		const [ormBooks] = await this.repo.findAndCount({
			skip: (page - 1) * limit,
			take: limit,
			order: {createdAt: 'DESC'},
			relations: ['extension', 'language', 'chapters']
		});
		console.log(ormBooks);
		return ormBooks.map(book => this.mapper.toDomain(book));
	}
}
