import {TaskPriorityEnum} from 'src/domain/entities/task/priority/taskPriority.entity';
import {TaskStatusEnum} from 'src/domain/entities/task/status/TaskStatus.entity';
import {Tag} from 'src/domain/entities/task/tag/tag.entity';

export class TaskDto {
	title: string;
	description: string;
	tags?: Tag[];
	prompt: JSON;
}

export class AiDto {
	type: string;
	actionType?: string;
	data?: {
		title: string;
		description?: string;
		tags?: Tag[];
		status?: TaskStatusEnum;
		priority?: TaskPriorityEnum;
	};
	prompt?: JSON;
	date: Date;
}
