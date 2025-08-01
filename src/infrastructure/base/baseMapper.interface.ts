export interface BaseMapper<OrmEntity, DomainEntity> {
	toDomain(entity: OrmEntity): DomainEntity;
	toOrm(entity: DomainEntity): OrmEntity;
}
