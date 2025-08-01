
import { BaseDomainLookupEntity } from '../baseLookup';

export class Extension extends BaseDomainLookupEntity {
	private constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		code: string,
		value: string
	) {
		super(id, createdAt, updatedAt, code, value);
	}

	static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		code: string;
		value: string;
	}): Extension {
		return new Extension(props.id, props.createdAt, props.updatedAt, props.code, props.value);
	}
}
