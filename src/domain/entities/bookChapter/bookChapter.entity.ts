import {BaseDomainEntity} from '../baseEntity';
import {Sentence} from '../sentence/sentence.entity';

export class BookChapter extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		public readonly bookId: string,
		public readonly order: number,
		public readonly wordCount: number,
		public readonly completed: boolean,
		//TODO remove, keep as sentences
		public readonly text: string,
		public readonly sentences: Sentence[],
	) {
		super(id, createdAt, updatedAt);
	}

	static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		bookId: string;
		order: number;
		wordCount: number;
		completed: boolean;
		text: string;
		sentences: Sentence[];
	}): BookChapter {
		return new BookChapter(
			props.id,
			props.createdAt,
			props.updatedAt,
			props.bookId,
			props.order,
			props.wordCount,
			props.completed,
			props.text,
			props.sentences,
		);
	}
}
