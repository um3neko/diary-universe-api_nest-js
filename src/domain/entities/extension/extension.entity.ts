import {BaseDomainLookupEntity} from '../baseLookup';

export class Extension extends BaseDomainLookupEntity {
	constructor(id: string, code: string, value: string) {
		super(id, code, value);
	}

	static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		code: string;
		value: string;
	}): Extension {
		return new Extension(props.id, props.code, props.value);
	}
}
