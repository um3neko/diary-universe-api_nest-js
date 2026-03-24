import {TaskPriorityEnum} from 'src/domain/entities/task/priority/taskPriority.enum';
import {Tag} from 'src/domain/entities/task/tag/tag.entity';
import {RecurrenceType} from 'src/domain/entities/task/taskRecurrence.entity';

export class CreateTaskDto {
	title: string;
	description: string;
	tags?: Tag[];
	prompt: JSON;
	priority?: TaskPriorityEnum;
	deadline?: string;
	recurrence?: RecurrenceDto;
}

export class GetRangeTasksDto {
	startDate: string;
	endDate: string;
}

export class RecurrenceDto {
	type: RecurrenceType;
	interval?: number;
	daysOfWeek?: number[];
	timeOfDay?: string;
}

export class AiDto {
	type: string;
	actionType?: string;
	data?: CreateTaskDto;
	prompt?: JSON;
	date: Date;
}
