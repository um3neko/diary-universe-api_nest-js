import {BaseDomainLookupEntity} from '../baseLookup';

export class Language extends BaseDomainLookupEntity {
	private constructor(id: string, createdAt: Date, updatedAt: Date, code: string, value: string) {
		super(id, createdAt, updatedAt, code, value);
	}

	static restore(props: {
		id: string;
		createdAt: Date;
		updatedAt: Date;
		code: string;
		value: string;
	}): Language {
		return new Language(props.id, props.createdAt, props.updatedAt, props.code, props.value);
	}
}
