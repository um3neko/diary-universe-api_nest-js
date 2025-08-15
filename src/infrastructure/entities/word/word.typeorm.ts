import {Entity, Column, ManyToOne} from 'typeorm';
import {BaseOrmEntity} from '../../base/baseOrmEntity';

@Entity('word')
export class WordOrmEntity extends BaseOrmEntity {
	@Column()
	text: string;
}
