import {TaskPriorityMap} from 'src/infrastructure/seedService/constant';
import {BaseDomainLookupEntity} from '../../baseLookup';
import {TaskPriorityEnum} from './taskPriority.enum';

type TaskPriorityCode = TaskPriorityEnum;

export class TaskPriority extends BaseDomainLookupEntity {
	private constructor(
		id: string,
		code: TaskPriorityCode,
		value: string,
		public emojiCode?: string,
	) {
		super(id, code, value);
	}

	public static create(code: TaskPriorityCode): TaskPriority {
		const id = crypto.randomUUID();
		const config = TaskPriorityMap[code];
		return new TaskPriority(id, config.code, config.value, config.emojiCode);
	}

	public static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		code: TaskPriorityCode;
		emojiCode?: string;
	}): TaskPriority {
		const config = TaskPriorityMap[props.code];
		return new TaskPriority(props.id, props.code, config.value, props.emojiCode);
	}

	public static get(code: TaskPriorityEnum): TaskPriority {
		const config = TaskPriorityMap[code];
		return new TaskPriority(config.id, config.code, config.value, config.emojiCode);
	}
}
