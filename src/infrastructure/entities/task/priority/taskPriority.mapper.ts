import { TaskPriority, PriorityLevel } from 'src/domain/entities/task/priority/taskPriority.entity';
import { TaskPriorityOrmEntity } from './taskPriority.typeorm';

export class TaskPriorityMapper {
  static toDomain(orm: TaskPriorityOrmEntity): TaskPriority {
    if (!orm) return null as any;
    return TaskPriority.restore(
      orm.id,
      orm.createdAt,
      orm.updatedAt,
      orm.level as PriorityLevel
    );
  }

  static toOrm(domain: TaskPriority): TaskPriorityOrmEntity {
    if (!domain) return null as any;
    const orm = new TaskPriorityOrmEntity();
    orm.id = domain.id;
    orm.createdAt = domain.createdAt;
    orm.updatedAt = domain.updatedAt;
    orm.level = domain.level;
    orm.title = `Priority Level ${domain.level}`;
    return orm;
  }
}
