import {Repository, ObjectLiteral} from 'typeorm';
import {BaseMapper} from './baseMapper.interface';

export class BaseRepository<OrmEntity extends ObjectLiteral, DomainEntity> {
	constructor(
		protected repo: Repository<OrmEntity>,
		protected mapper: BaseMapper<OrmEntity, DomainEntity>,
	) {}

	async findById(id: string): Promise<DomainEntity | null> {
		const orm = await this.repo.findOne({where: {id} as any});
		return this.toDomainOrNull(orm);
	}

	async save(entity: DomainEntity): Promise<void> {
		const ormEntity = this.mapper.toOrm(entity);
		await this.repo.save(ormEntity);
	}

	toDomainOrNull(entity: OrmEntity | null): DomainEntity | null {
		return entity ? this.mapper.toDomain(entity) : null;
	}
}
