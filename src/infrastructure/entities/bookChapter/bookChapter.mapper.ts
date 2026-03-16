import { BookChapterOrmEntity } from './bookChapter.typeorm';
import { BookChapter } from 'src/domain/entities/bookChapter/bookChapter.entity';

export class BookChapterMapper {
	static toDomain(orm: BookChapterOrmEntity): BookChapter {
		if (!orm) return null as any;
		return BookChapter.restore({
			id: orm.id,
			createdAt: orm.createdAt,
			updatedAt: orm.updatedAt,
			bookId: orm.book?.id || '',
			chunkNumber: orm.chapterNumber,
			wordCount: orm.wordCount,
			completed: orm.completed,
			text: orm.text,
			sentences: [], // TODO: Load sentences separately or implement SentenceMapper
		});
	}

	static toOrm(domain: BookChapter): BookChapterOrmEntity {
		if (!domain) return null as any;
		const orm = new BookChapterOrmEntity();
		orm.id = domain.id;
		orm.createdAt = domain.createdAt;
		orm.updatedAt = domain.updatedAt;
		orm.chapterNumber = domain.chunkNumber;
		orm.wordCount = domain.wordCount;
		orm.completed = domain.completed;
		orm.text = domain.text;
		return orm;
	}
}
