import {TaskTagEnum} from 'src/domain/entities/task/tag/taskTag.enum';
import {TaskTagMap} from 'src/infrastructure/seedService/constant';
import {BaseDomainEntity} from '../../baseEntity';

export class Tag extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		public emojiCode: string,
		public readonly name: string,
		public readonly code: TaskTagEnum,
	) {
		super(id, createdAt, updatedAt);
	}

	public static create(name: string, emojiCode: string, code: TaskTagEnum): Tag {
		const id = crypto.randomUUID();
		const now = new Date();
		return new Tag(id, now, now, emojiCode, name, code);
	}

	public static restore(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		emojiCode: string,
		name: string,
		code: TaskTagEnum,
	): Tag {
		return new Tag(id, createdAt, updatedAt, emojiCode, name, code);
	}

	private static readonly _baseDate = new Date('2020-01-01');

	public static get(code: TaskTagEnum): Tag {
		const config = TaskTagMap[code];
		return Tag.restore(config.id, Tag._baseDate, Tag._baseDate, config.emojiCode, config.name, config.code);
	}
}
