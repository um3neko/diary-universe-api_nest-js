import {BaseDomainEntity} from '../baseEntity';
import {Task} from './task.entity';

//TODO: types to fix
export type RecurrenceType = 'daily' | 'weekly' | 'custom';

export class TaskRecurrence extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,

		public task: Task,
		public type: RecurrenceType,
		public interval?: number,
		public daysOfWeek?: number[],
		public timeOfDay?: string,
		public startDate?: Date,
		public endDate?: Date,
	) {
		super(id, createdAt, updatedAt);
	}

	public static create(props: {
		task: Task;
		type: RecurrenceType;
		interval?: number;
		daysOfWeek?: number[];
		timeOfDay?: string;
		startDate?: Date;
		endDate?: Date;
	}): TaskRecurrence {
		const id = crypto.randomUUID();
		const now = new Date();

		return new TaskRecurrence(
			id,
			now,
			now,
			props.task,
			props.type,
			props.interval,
			props.daysOfWeek,
			props.timeOfDay,
			props.startDate,
			props.endDate,
		);
	}

	public static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		task: Task;
		type: RecurrenceType;
		interval?: number;
		daysOfWeek?: number[];
		timeOfDay?: string;
		startDate?: Date;
		endDate?: Date;
	}): TaskRecurrence {
		return new TaskRecurrence(
			props.id,
			props.createdAt,
			props.updatedAt,
			props.task,
			props.type,
			props.interval,
			props.daysOfWeek,
			props.timeOfDay,
			props.startDate,
			props.endDate,
		);
	}
}
