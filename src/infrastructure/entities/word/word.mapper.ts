import { WordOrmEntity } from './word.typeorm';
import { Word } from 'src/domain/entities/word/word.entity';

export class WordMapper {
  static toDomain(orm: WordOrmEntity): Word {
    if (!orm) return null as any;
    return Word.restore({
      id: orm.id,
      text: orm.text,
      createdAt: orm.createdAt,
      updatedAt: orm.updatedAt,
    });
  }

  static toOrm(domain: Word): WordOrmEntity {
    if (!domain) return null as any;
    const orm = new WordOrmEntity();
    orm.id = domain.id;
    orm.text = domain.text;
    orm.createdAt = domain.createdAt;
    orm.updatedAt = domain.updatedAt;
    return orm;
  }
}
