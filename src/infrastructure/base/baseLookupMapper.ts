import {BaseDomainLookupEntity} from 'src/domain/entities/baseLookup';
import {BaseLookupOrmEntity} from 'src/infrastructure/base/baseLookupOrmEntity';

export abstract class BaseLookupMapper {
	static toDomain<T extends BaseDomainLookupEntity>(
		orm: BaseLookupOrmEntity | null,
		factory: (props: {id: string; code: string; value: string}) => T,
	): T | null {
		if (!orm) return null;

		return factory({
			id: orm.id,
			code: orm.code,
			value: orm.value,
		});
	}

	static toOrm<T extends BaseLookupOrmEntity>(
		domain: BaseDomainLookupEntity | null,
		ormClass: new () => T,
	): T | null {
		if (!domain) return null;

		const orm = new ormClass();
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		orm.id = domain.id;
		orm.code = domain.code;
		orm.value = domain.value;
		return orm;
	}
}
