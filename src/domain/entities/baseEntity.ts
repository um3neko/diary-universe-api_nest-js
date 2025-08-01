export abstract class BaseDomainEntity {
	constructor(
		public id: string,
		public createdAt: Date,
		public updatedAt: Date,
	) {}

	public touch(): void {
		this.updatedAt = new Date();
	}
}
