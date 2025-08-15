import {Book} from 'src/domain/entities/book/book.entity';
import {BookOrmEntity} from './book.typeorm';
import {Extension} from 'src/domain/entities/extension/extension.entity';
import {Language} from 'src/domain/entities/language/language.entity';
import {ExtensionOrmEntity} from '../extension/extension.typeorm';
import {LanguageOrmEntity} from '../language/language.typeorm';
import {BaseLookupMapper} from 'src/infrastructure/base/baseLookupMapper';

export class BookMapper {
	static toDomain(orm: BookOrmEntity): Book {
		return Book.restore({
			id: orm.id,
			createdAt: orm.createdAt,
			updatedAt: orm.updatedAt,
			title: orm.title,
			author: orm.author,

			bookChapters: [],
			extension: BaseLookupMapper.toDomain(orm.extension, Extension.restore) ?? null,
			language: BaseLookupMapper.toDomain(orm.language, Language.restore) ?? null,
		});
	}

	static toOrm(domain: Book): BookOrmEntity {
		const orm = new BookOrmEntity();
		orm.id = domain.id;
		orm.title = domain.title;
		orm.author = domain.author;

		if (domain.extension) {
			orm.extension = {id: domain.extension.id} as ExtensionOrmEntity;
		}

		if (domain.language) {
			orm.language = {id: domain.language.id} as LanguageOrmEntity;
		}
		return orm;
	}
}
