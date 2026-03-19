export abstract class BaseDomainLookupEntity {
	id: string;
	constructor(
		id: string,
		public code: string,
		public value: string,
	) {}
}
