import {TaskPriority} from 'src/domain/entities/task/priority/taskPriority.entity';
import {TaskPriorityEnum} from 'src/domain/entities/task/priority/taskPriority.enum';
import {TaskPriorityOrmEntity} from './taskPriority.typeorm';
import {TaskPriorityConfigItem} from 'src/infrastructure/seedService/constant';

export class TaskPriorityMapper {
	static toDomain(orm: TaskPriorityOrmEntity): TaskPriority {
		return TaskPriority.restore({
			id: orm.id,
			createdAt: orm.createdAt,
			updatedAt: orm.updatedAt,
			code: orm.code as TaskPriorityEnum,
			emojiCode: orm.emojiCode,
		});
	}

	static toOrm(domain: TaskPriority): TaskPriorityOrmEntity {
		const orm = new TaskPriorityOrmEntity();
		orm.id = domain.id;
		orm.code = domain.code;
		orm.value = domain.value;
		orm.emojiCode = domain.emojiCode;
		return orm;
	}

	static fromConfig(config: TaskPriorityConfigItem): TaskPriorityOrmEntity {
		const orm = new TaskPriorityOrmEntity();
		orm.id = config.id;
		orm.value = config.value;
		orm.code = config.code;
		orm.emojiCode = config.emojiCode;
		return orm;
	}
}
