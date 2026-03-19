import {TaskStatus, TaskStatusEnum} from 'src/domain/entities/task/status/TaskStatus.entity';
import {TaskStatusOrmEntity} from './taskStatus.typeorm';

export class TaskStatusMapper {
	static toDomain(orm: TaskStatusOrmEntity): TaskStatus {
		if (!orm) return null as any;
		return TaskStatus.restore({
			id: orm.id,
			createdAt: orm.createdAt,
			updatedAt: orm.updatedAt,
			code: orm.code as TaskStatusEnum,
		});
	}

	static toOrm(domain: TaskStatus): TaskStatusOrmEntity {
		if (!domain) return null as any;
		const orm = new TaskStatusOrmEntity();
		orm.id = domain.id;
		orm.createdAt = domain.createdAt;
		orm.updatedAt = domain.updatedAt;
		orm.code = domain.code;
		orm.value = domain.value;
		return orm;
	}
}
