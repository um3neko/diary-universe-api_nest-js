import {BaseDomainEntity} from '../baseEntity';
import {Task} from './task.entity';

export class TaskCompletion extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,

		public task: Task,
		public completedAt: Date,
		public note?: string,
	) {
		super(id, createdAt, updatedAt);
	}

	public static create(props: {task: Task; completedAt?: Date; note?: string}): TaskCompletion {
		const id = crypto.randomUUID();
		const now = new Date();

		return new TaskCompletion(id, now, now, props.task, props.completedAt || now, props.note);
	}

	public static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		task: Task;
		completedAt: Date;
		note?: string;
	}): TaskCompletion {
		return new TaskCompletion(
			props.id,
			props.createdAt,
			props.updatedAt,
			props.task,
			props.completedAt,
			props.note,
		);
	}
}
