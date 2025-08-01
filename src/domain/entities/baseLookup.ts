import {BaseDomainEntity} from './baseEntity';

export abstract class BaseDomainLookupEntity extends BaseDomainEntity {
	constructor(
		id: string,
		createdAt: Date,
		updatedAt: Date,
		public code: string,
		public value: string,
	) {
		super(id, createdAt, updatedAt);
	}
}
