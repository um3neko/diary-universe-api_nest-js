import { Extension } from 'src/domain/entities/extension/extension.entity';
import { ExtensionOrmEntity } from './extension.typeorm';

export class ExtensionMapper {
  static toDomain(orm: ExtensionOrmEntity): Extension {
    if (!orm) return null as any;
    return Extension.restore({
      id: orm.id,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
      code: orm.code,
      value: orm.value,
    });
  }

  static toOrm(domain: Extension): ExtensionOrmEntity {
    if (!domain) return null as any;
    const orm = new ExtensionOrmEntity();
    orm.id = domain.id;
    orm.createdAt = domain.createdAt;
    orm.updatedAt = domain.updatedAt;
    orm.code = domain.code;
    orm.value = domain.value;
    return orm;
  }
}
