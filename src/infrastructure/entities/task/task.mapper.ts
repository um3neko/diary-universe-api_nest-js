import {Task} from 'src/domain/entities/task/task.entity';
import {TaskOrmEntity} from './task.typeorm';
import {TaskStatusMapper} from './status/taskStatus.mapper';
import {TaskPriorityMapper} from './priority/taskPriority.mapper';
import {TagMapper} from './tag/tag.mapper';

export class TaskMapper {
	static toDomain(orm: TaskOrmEntity): Task {
		if (!orm) return null as any;
		return Task.restore({
			id: orm.id,
			createdAt: orm.createdAt,
			updatedAt: orm.updatedAt,
			title: orm.title,
			description: orm.description,
			status: orm.status ? TaskStatusMapper.toDomain(orm.status) : (null as any),
			priority: orm.priority ? TaskPriorityMapper.toDomain(orm.priority) : (null as any),
			tags: orm.tags ? orm.tags.map(tag => TagMapper.toDomain(tag)) : [],
			prompt: orm.prompt,
		});
	}

	static toOrm(domain: Task): TaskOrmEntity {
		if (!domain) return null as any;
		const orm = new TaskOrmEntity();
		orm.id = domain.id;
		orm.createdAt = domain.createdAt;
		orm.updatedAt = domain.updatedAt;
		orm.title = domain.title;
		orm.description = domain.description as string;
		orm.status = domain.status ? TaskStatusMapper.toOrm(domain.status) : (null as any);
		orm.priority = domain.priority ? TaskPriorityMapper.toOrm(domain.priority) : (null as any);
		orm.tags = domain.tags ? domain.tags.map(tag => TagMapper.toOrm(tag)) : [];
		orm.prompt = domain.prompt;
		return orm;
	}
}
