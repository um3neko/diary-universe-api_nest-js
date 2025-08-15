import {Entity, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {BaseOrmEntity} from '../../base/baseOrmEntity';
import {BookChapterOrmEntity} from '../bookChapter/bookChapter.typeorm';
import {ExtensionOrmEntity} from '../extension/extension.typeorm';
import {LanguageOrmEntity} from '../language/language.typeorm';

@Entity('book')
export class BookOrmEntity extends BaseOrmEntity {
	@Column()
	title: string;

	@Column()
	author: string;

	@ManyToOne(() => ExtensionOrmEntity)
	@JoinColumn({name: 'extensionId'})
	extension: ExtensionOrmEntity;

	@ManyToOne(() => LanguageOrmEntity)
	@JoinColumn({name: 'languageId'})
	language: LanguageOrmEntity;

	@OneToMany(() => BookChapterOrmEntity, chapter => chapter.book)
	chapters: BookChapterOrmEntity[];
}
