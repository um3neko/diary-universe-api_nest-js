import {Language} from 'src/domain/entities/language/language.entity';
import {LanguageOrmEntity} from './language.typeorm';

export class LanguageMapper {
	static toDomain(orm: LanguageOrmEntity): Language {
		if (!orm) return null as any;
		return Language.restore({
			id: orm.id,

			code: orm.code,
			value: orm.value,
		});
	}

	static toOrm(domain: Language): LanguageOrmEntity {
		if (!domain) return null as any;
		const orm = new LanguageOrmEntity();
		orm.id = domain.id;
		orm.code = domain.code;
		orm.value = domain.value;
		return orm;
	}
}
