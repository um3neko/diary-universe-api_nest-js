import { BaseDomainEntity } from "../baseEntity";
import { TaskPriority } from "./priority/taskPriority.entity";
import { TaskStatus } from "./status/TaskStatus.entity";
import { TaskTag } from "./tag/tagTask.entity";

export class Task extends BaseDomainEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		public title: String,
		public description: String | undefined,

		public status: TaskStatus,
		public priority: TaskPriority,
		public tags?: TaskTag[],
	) {
		super(id, createdAt, updatedAt);
	}

	public static create(props: {
		title: String,
		description: String | undefined,
		status: TaskStatus,
		priority: TaskPriority,
		tags?: TaskTag[],
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
			props.tags

		);
	}

	public static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		title: String,
		description: String | undefined,

		status: TaskStatus,
		priority: TaskPriority,
		tags?: TaskTag[],

	}): Task {
		return new Task(
			props.id,
			props.createdAt,
			props.updatedAt,
			props.title,
			props.description,
			props.status,
			props.priority,
			props.tags
		);
	}

}
