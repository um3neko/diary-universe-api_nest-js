import {BaseDomainLookupEntity} from '../baseLookup';

export class Language extends BaseDomainLookupEntity {
	constructor(id: string, code: string, value: string) {
		super(id, code, value);
	}

	static restore(props: {id: string; code: string; value: string}): Language {
		return new Language(props.id, props.code, props.value);
	}
}
