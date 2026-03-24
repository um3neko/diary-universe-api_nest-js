import {TaskStatus} from 'src/domain/entities/task/status/taskStatus.entity';
import {TaskStatusOrmEntity} from './taskStatus.typeorm';
import {TaskStatusConfigItem} from 'src/infrastructure/seedService/constant';
import {TaskStatusEnum} from 'src/domain/entities/task/status/taskStatus.enum';

export class TaskStatusMapper {
	static toDomain(orm: TaskStatusOrmEntity): TaskStatus {
		return TaskStatus.restore({
			id: orm.id,
			code: orm.code as TaskStatusEnum,
			emojiCode: orm.emojiCode,
		});
	}

	static toOrm(domain: TaskStatus): TaskStatusOrmEntity {
		const orm = new TaskStatusOrmEntity();
		orm.id = domain.id;
		orm.code = domain.code;
		orm.value = domain.value;
		orm.emojiCode = domain.emojiCode;
		return orm;
	}

	static fromConfig(config: TaskStatusConfigItem): TaskStatusOrmEntity {
		const orm = new TaskStatusOrmEntity();
		orm.id = config.id;
		orm.value = config.value;
		orm.code = config.code;
		orm.emojiCode = config.emojiCode;
		return orm;
	}
}
