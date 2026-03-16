import { TaskStatus, TaskStatusEnum } from 'src/domain/entities/task/status/TaskStatus.entity';
import { TaskStatusOrmEntity } from './taskStatus.typeorm';

export class TaskStatusMapper {
  static toDomain(orm: TaskStatusOrmEntity): TaskStatus {
    if (!orm) return null as any;
    // Convert title to enum - adjust based on your mapping logic
    const statusEnum = (orm.title as unknown as TaskStatusEnum) || TaskStatusEnum.PENDING;
    return TaskStatus.restore(
      orm.id,
      orm.createdAt,
      orm.updatedAt,
      statusEnum
    );
  }

  static toOrm(domain: TaskStatus): TaskStatusOrmEntity {
    if (!domain) return null as any;
    const orm = new TaskStatusOrmEntity();
    orm.id = domain.id;
    orm.createdAt = domain.createdAt;
    orm.updatedAt = domain.updatedAt;
    orm.title = domain.status;
    orm.level = 0; // TODO: Set appropriate level
    return orm;
  }
}
