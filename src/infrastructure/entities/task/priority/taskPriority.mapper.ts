import {
	TaskPriority,
	TaskPriorityEnum,
} from 'src/domain/entities/task/priority/taskPriority.entity';
import {TaskPriorityOrmEntity} from './taskPriority.typeorm';

export class TaskPriorityMapper {
	static toDomain(orm: TaskPriorityOrmEntity): TaskPriority {
		if (!orm) return null as any;
		return TaskPriority.restore({
			id: orm.id,
			createdAt: orm.createdAt,
			updatedAt: orm.updatedAt,
			code: orm.code as TaskPriorityEnum,
		});
	}

	static toOrm(domain: TaskPriority): TaskPriorityOrmEntity {
		if (!domain) return null as any;
		const orm = new TaskPriorityOrmEntity();
		orm.id = domain.id;
		orm.code = domain.code;
		orm.value = domain.value;
		return orm;
	}
}
