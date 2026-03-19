import {Column} from 'typeorm';
import {BaseOrmEntity} from './baseOrmEntity';

export abstract class BaseLookupOrmEntity extends BaseOrmEntity {
	@Column({unique: true})
	code: string;

	@Column()
	value: string;
}
