import {TaskStatusMap} from 'src/infrastructure/seedService/constant';
import {BaseDomainLookupEntity} from '../../baseLookup';
import {TaskStatusEnum} from './taskStatus.enum';

type TaskStatusCode = TaskStatusEnum;

export class TaskStatus extends BaseDomainLookupEntity {
	private constructor(
		id: string,
		code: TaskStatusCode,
		value: string,
		public emojiCode?: string,
	) {
		super(id, code, value);
	}

	public static create(code: TaskStatusEnum): TaskStatus {
		const id = crypto.randomUUID();
		const config = TaskStatusMap[code];
		return new TaskStatus(id, config.code, config.value, config.emojiCode);
	}

	public static restore(props: {
		id: string;
		code: TaskStatusCode;
		emojiCode?: string;
	}): TaskStatus {
		const config = TaskStatusMap[props.code];
		return new TaskStatus(props.id, props.code, config.value, props.emojiCode);
	}

	public static get(code: TaskStatusEnum): TaskStatus {
		const config = TaskStatusMap[code];
		return new TaskStatus(config.id, config.code, config.value, config.emojiCode);
	}
}
