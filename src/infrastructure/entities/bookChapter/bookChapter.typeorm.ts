// episode: number,
// wordCount: number,
// completed: boolean,
// text: string,

import {Entity, Column, ManyToOne} from 'typeorm';
import {BaseOrmEntity} from '../../base/baseOrmEntity';
import {BookOrmEntity} from '../book/book.typeorm';

@Entity()
export class BookChapterOrmEntity extends BaseOrmEntity {
	@Column()
	chapterNumber: number;

	@Column()
	wordCount: number;

	@Column()
	completed: boolean;

	@Column()
	text: string;

	@ManyToOne(() => BookOrmEntity, book => book.chapters)
	book: BookOrmEntity;
}
