import {Tag} from 'src/domain/entities/task/tag/tag.entity';
import {TagOrmEntity} from './tag.typeorm';

export class TagMapper {
	static toDomain(orm: TagOrmEntity): Tag {
		if (!orm) return null as any;
		return Tag.restore(orm.id, orm.createdAt, orm.updatedAt, orm.name);
	}

	static toOrm(domain: Tag): TagOrmEntity {
		if (!domain) return null as any;
		const orm = new TagOrmEntity();
		orm.id = domain.id;
		orm.createdAt = domain.createdAt;
		orm.updatedAt = domain.updatedAt;
		orm.name = domain.name;
		return orm;
	}
}
