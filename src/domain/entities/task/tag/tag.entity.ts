import {BaseDomainEntity} from '../../baseEntity';

export class Tag extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		public readonly name: string,
	) {
		super(id, createdAt, updatedAt);
	}

	public static create(name: string): Tag {
		const id = crypto.randomUUID();
		const now = new Date();
		return new Tag(id, now, now, name);
	}

	public static restore(id: string, createdAt: Date, updatedAt: Date, name: string): Tag {
		return new Tag(id, createdAt, updatedAt, name);
	}
}
