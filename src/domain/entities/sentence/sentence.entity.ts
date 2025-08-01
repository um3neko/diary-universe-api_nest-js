import {BaseDomainEntity} from '../baseEntity';

export class Sentence extends BaseDomainEntity {

	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		public readonly bookChapterId: string,
		public readonly order: number,
		public readonly wordCount: number,
		public readonly completed: boolean,
		//TODO remove, keep as sentences
		public readonly text: string,

	) {
		super(id, createdAt, updatedAt);
	}
}
