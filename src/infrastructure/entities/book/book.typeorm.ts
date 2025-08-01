// title: string,
// author: string,
// bookChapter: BookChapter,

import {Entity, Column, OneToMany} from 'typeorm';
import {BaseOrmEntity} from '../../base/baseOrmEntity';
import {BookChapterOrmEntity} from '../bookChapter/bookChapter.typeorm';

@Entity()
export class BookOrmEntity extends BaseOrmEntity {
	@Column()
	title: string;

	@Column()
	author: string;

	@Column()
	extension: string;

	@OneToMany(() => BookChapterOrmEntity, chapter => chapter.book)
	chapters: BookChapterOrmEntity[];
}
