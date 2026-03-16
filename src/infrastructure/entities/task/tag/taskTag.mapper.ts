import { TaskTag } from 'src/domain/entities/task/tag/tagTask.entity';
import { TagOrmEntity } from './taskTag.typeorm';

export class TaskTagMapper {
  static toDomain(orm: TagOrmEntity): TaskTag {
    if (!orm) return null as any;
    return TaskTag.restore(
      orm.id,
      orm.createdAt,
      orm.updatedAt,
      orm.name
    );
  }

  static toOrm(domain: TaskTag): TagOrmEntity {
    if (!domain) return null as any;
    const orm = new TagOrmEntity();
    orm.id = domain.id;
    orm.createdAt = domain.createdAt;
    orm.updatedAt = domain.updatedAt;
    orm.name = domain.name;
    return orm;
  }
}
