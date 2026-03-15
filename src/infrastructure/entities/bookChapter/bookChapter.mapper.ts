import {Book} from 'src/domain/entities/book/book.entity';
import { BookChapterOrmEntity } from './bookChapter.typeorm';
import { BookChapter } from 'src/domain/entities/bookChapter/bookChapter.entity';

export class BookChapterMapper {
	static toDomain(orm: BookChapterOrmEntity): BookChapter {
		return BookChapter.restore({
			id: orm.id,
			createdAt: orm.createdAt,
			updatedAt: orm.updatedAt,
			bookId: orm.book.id,
			completed: orm.completed,
			chunkNumber: orm.chapterNumber,
			sentences: [],
			text: 'qwer',
			wordCount: orm.wordCount
		});
	}

	static toOrm(domain: BookChapter): BookChapterOrmEntity {
		const orm = new BookChapterOrmEntity();
		orm.id = domain.id;
		// orm.title = domain.title;
		// orm.author = domain.author;

		// if (domain.extension) {
		// 	orm.extension = {id: domain.extension.id} as ExtensionOrmEntity;
		// }

		// if (domain.language) {
		// 	orm.language = {id: domain.language.id} as LanguageOrmEntity;
		// }
		return orm;
	}
}
