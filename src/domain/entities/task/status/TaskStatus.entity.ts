import {BaseDomainLookupEntity} from '../../baseLookup';

export enum TaskStatusEnum {
	TODO = 'todo',
	DONE = 'done',
}

export const TaskStatusConfig = {
	[TaskStatusEnum.TODO]: {
		value: '1',
		code: TaskStatusEnum.TODO,
	},
	[TaskStatusEnum.DONE]: {
		value: '2',
		code: TaskStatusEnum.DONE,
	},
} as const;

type TaskStatusCode = TaskStatusEnum;

export class TaskStatus extends BaseDomainLookupEntity {
	private constructor(id: string, code: TaskStatusCode, value: string) {
		super(id, code, value);
	}

	public static create(code: TaskStatusEnum): TaskStatus {
		const id = crypto.randomUUID();
		const config = TaskStatusConfig[code];
		return new TaskStatus(id, config.code, config.value);
	}

	public static restore(props: {id: string; code: TaskStatusCode}): TaskStatus {
		const config = TaskStatusConfig[props.code];
		return new TaskStatus(props.id, props.code, config.value);
	}
}
