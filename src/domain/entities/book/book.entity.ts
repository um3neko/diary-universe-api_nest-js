import {BaseDomainEntity} from '../baseEntity';
import {BookChapter} from '../bookChapter/bookChapter.entity';
import {Extension} from '../extension/extension.entity';
import {Language} from '../language/language.entity';

export class Book extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,

		public title: string,
		public author: string,
		public extension: Extension,
		public language: Language,
		public bookChapters: BookChapter[],
	) {
		super(id, createdAt, updatedAt);
	}

	public static create(props: {
		title: string;
		author: string;
		extension: Extension;
		language: Language;
		bookChapters: BookChapter[];
	}): Book {
		const id = crypto.randomUUID();
		const now = new Date();
		return new Book(
			id,
			now,
			now,
			props.title,
			props.author,
			props.extension,
			props.language,
			props.bookChapters,
		);
	}

	public static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		title: string;
		author: string;
		extension: Extension;
		language: Language;
		bookChapters: BookChapter[];
	}): Book {
		return new Book(
			props.id,
			props.createdAt,
			props.updatedAt,
			props.title,
			props.author,
			props.extension,
			props.language,
			props.bookChapters,
		);
	}

	public updateTitle(newTitle: string): void {
		this.title = newTitle;
		this.touch();
	}
}
