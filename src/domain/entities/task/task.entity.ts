import {BaseDomainEntity} from '../baseEntity';
import {TaskStatus} from './status/taskStatus.entity';
import {TaskPriority} from './priority/taskPriority.entity';
import {Tag} from './tag/tag.entity';
import {TaskRecurrence} from './taskRecurrence.entity';

export class Task extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		public title: string,
		public description: string | undefined,

		public status: TaskStatus,
		public priority: TaskPriority,
		public prompt: JSON,
		public tags?: Tag[],
		public deadline?: Date,
	) {
		super(id, createdAt, updatedAt);
	}

	public static create(props: {
		title: string;
		description: string | undefined;
		status: TaskStatus;
		priority: TaskPriority;
		tags?: Tag[];
		prompt: JSON;
		deadline?: Date;
	}): Task {
		const id = crypto.randomUUID();
		const now = new Date();
		return new Task(
			id,
			now,
			now,
			props.title,
			props.description,
			props.status,
			props.priority,
			props.prompt,
			props.tags || [],
			props.deadline,
		);
	}

	public static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		title: string;
		description: string | undefined;

		status: TaskStatus;
		priority: TaskPriority;
		tags?: Tag[];
		prompt: JSON;
		deadline?: Date;
	}): Task {
		return new Task(
			props.id,
			props.createdAt,
			props.updatedAt,
			props.title,
			props.description,
			props.status,
			props.priority,
			props.prompt,
			props.tags || [],
			props.deadline,
		);
	}
}
