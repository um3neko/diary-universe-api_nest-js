import { WordOrmEntity } from './word.typeorm';

export class WordMapper {
  static toDomain(orm: WordOrmEntity): any {
    if (!orm) return null as any;
    return {
      id: orm.id,
      text: orm.text,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
    };
  }

  static toOrm(domain: any): WordOrmEntity {
    if (!domain) return null as any;
    const orm = new WordOrmEntity();
    orm.id = domain.id;
    orm.text = domain.text;
    orm.createdAt = domain.createdAt;
    orm.updatedAt = domain.updatedAt;
    return orm;
  }
}
