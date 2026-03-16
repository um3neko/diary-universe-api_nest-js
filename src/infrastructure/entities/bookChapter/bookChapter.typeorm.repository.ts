import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Book} from 'src/domain/entities/book/book.entity';
import {BaseRepository} from 'src/infrastructure/base/baseRepository';
import {IBookRepository} from 'src/domain/entities/book/book.repository';

import {BookChapter} from 'src/domain/entities/bookChapter/bookChapter.entity';
import {BookChapterOrmEntity} from './bookChapter.typeorm';
import {BookChapterMapper} from './bookChapter.mapper';

export const TypeOrmBookChapterRepositoryToken = Symbol('TypeOrmBookChapterRepository');

@Injectable()
// implements IBookRepository
export class TypeOrmBookChapterRepository extends BaseRepository<
	BookChapterOrmEntity,
	BookChapter
> {
	constructor(
		@InjectRepository(BookChapterOrmEntity)
		repo: Repository<BookChapterOrmEntity>,
	) {
		super(repo, BookChapterMapper);
	}

	//TODO: shuld return nice BookChunksPreviewDtoResponse
	async findBookChunksPreviewById(id: string): Promise<BookChapterOrmEntity[]> {
		const data = await this.repo.find({
			where: {book: {id}},
		});
		return data;
	}
}
