import {Repository, ObjectLiteral} from 'typeorm';
import { BaseMapper } from './baseMapper.interface';

export class BaseRepository<OrmEntity extends ObjectLiteral, DomainEntity> {
	constructor(
		protected repo: Repository<OrmEntity>,
		protected mapper: BaseMapper<OrmEntity, DomainEntity>,
	) {}

	async findById(id: string): Promise<DomainEntity | null> {
		const orm = await this.repo.findOne({where: {id} as any});
		return orm ? this.mapper.toDomain(orm) : null;
	}

	async save(entity: DomainEntity): Promise<void> {
		const ormEntity = this.mapper.toOrm(entity);
		await this.repo.save(ormEntity);
	}
}
