import {BaseDomainLookupEntity} from 'src/domain/entities/baseLookup';
import {BaseLookupOrmEntity} from 'src/infrastructure/base/baseLookupOrmEntity';

export abstract class BaseLookupMapper {
	static toDomain<T extends BaseDomainLookupEntity>(
		orm: BaseLookupOrmEntity | null,
		factory: (props: {
			id: string;
			createdAt: Date;
			updatedAt: Date;
			code: string;
			value: string;
		}) => T,
	): T | null {
		if (!orm) return null;

		return factory({
			id: orm.id,
			createdAt: orm.createdAt,
			updatedAt: orm.updatedAt,
			code: orm.code,
			value: orm.description,
		});
	}

	static toOrm<T extends BaseLookupOrmEntity>(
		domain: BaseDomainLookupEntity | null,
		ormClass: new () => T,
	): T | null {
		if (!domain) return null;

		const orm = new ormClass();
		orm.id = domain.id;
		orm.createdAt = domain.createdAt;
		orm.updatedAt = domain.updatedAt;
		orm.code = domain.code;
		orm.description = domain.value;
		return orm;
	}
}
