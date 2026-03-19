import {BaseDomainEntity} from '../baseEntity';

export class Word extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		public text: string,
	) {
		super(id, createdAt, updatedAt);
	}

	static create(props: { text: string }): Word {
		const id = crypto.randomUUID();
		const now = new Date();
		return new Word(id, now, now, props.text);
	}

	static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		text: string;
	}): Word {
		return new Word(props.id, props.createdAt, props.updatedAt, props.text);
	}
}

export class WordContext extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,

		public readonly wordId: string,
		public readonly sentenceId: string,

		public readonly positionInSentence: number,
		public readonly isCapitalized: boolean,
		public readonly punctuationAfter: string,
		public readonly isLastInSentence: boolean,
		public readonly isInteractive: boolean,
	) {
		super(id, createdAt, updatedAt);
	}

	static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;

		wordId: string;
		sentenceId: string;

		positionInSentence: number;
		isCapitalized: boolean;
		punctuationAfter: string;
		isLastInSentence: boolean;
		isInteractive: boolean;
	}): WordContext {
		return new WordContext(
			props.id,
			props.createdAt,
			props.updatedAt,
			props.wordId,
			props.sentenceId,
			props.positionInSentence,
			props.isCapitalized,
			props.punctuationAfter,
			props.isLastInSentence,
			props.isInteractive,
		);
	}
}
