import {BaseDomainLookupEntity} from '../../baseLookup';

export enum TaskPriorityEnum {
	VERY_LOW = 'very_low',
	LOW = 'low',
	MEDIUM = 'medium',
	HIGH = 'high',
	VERY_HIGH = 'very_high',
}

export const TaskPriorityConfig = {
	[TaskPriorityEnum.VERY_LOW]: {
		value: '1',
		code: TaskPriorityEnum.VERY_LOW,
	},
	[TaskPriorityEnum.LOW]: {
		value: '2',
		code: TaskPriorityEnum.LOW,
	},
	[TaskPriorityEnum.MEDIUM]: {
		value: '3',
		code: TaskPriorityEnum.MEDIUM,
	},
	[TaskPriorityEnum.HIGH]: {
		value: '4',
		code: TaskPriorityEnum.HIGH,
	},
	[TaskPriorityEnum.VERY_HIGH]: {
		value: '5',
		code: TaskPriorityEnum.VERY_HIGH,
	},
} as const;

type TaskPriorityCode = TaskPriorityEnum;

export class TaskPriority extends BaseDomainLookupEntity {
	private constructor(id: string, createdAt: Date, updatedAt: Date, code: TaskPriorityCode, value: string) {
		super(id, createdAt, updatedAt, code, value);
	}

	public static create(code: TaskPriorityCode): TaskPriority {
		const id = crypto.randomUUID();
		const now = new Date();
		const config = TaskPriorityConfig[code];
		return new TaskPriority(id, now, now, config.code, config.value);
	}

	public static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		code: TaskPriorityCode;
	}): TaskPriority {
		const config = TaskPriorityConfig[props.code];
		return new TaskPriority(props.id, props.createdAt, props.updatedAt, props.code, config.value);
	}
}
