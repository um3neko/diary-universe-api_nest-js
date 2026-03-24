import {Tag} from 'src/domain/entities/task/tag/tag.entity';
import {TagOrmEntity} from './tag.typeorm';
import {TaskTagConfigItem} from 'src/infrastructure/seedService/constant';
import {TaskTagEnum} from 'src/domain/entities/task/tag/taskTag.enum';

export class TagMapper {
	static toDomain(orm: TagOrmEntity): Tag {
		return Tag.restore(
			orm.id,
			orm.createdAt,
			orm.updatedAt,
			orm.emojiCode,
			orm.name,
			orm.code as TaskTagEnum,
		);
	}

	static toOrm(domain: Tag): TagOrmEntity {
		const orm = new TagOrmEntity();
		orm.id = domain.id;
		orm.createdAt = domain.createdAt;
		orm.updatedAt = domain.updatedAt;
		orm.name = domain.name;
		orm.emojiCode = domain.emojiCode;
		orm.code = domain.code;
		return orm;
	}

	static fromConfig(config: TaskTagConfigItem): TagOrmEntity {
		const orm = new TagOrmEntity();
		orm.id = config.id;
		orm.code = config.code;
		orm.name = config.name;
		orm.emojiCode = config.emojiCode;
		return orm;
	}
}
