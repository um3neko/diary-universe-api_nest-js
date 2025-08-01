import { BaseDomainEntity } from '../baseEntity';

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
			props.isInteractive
