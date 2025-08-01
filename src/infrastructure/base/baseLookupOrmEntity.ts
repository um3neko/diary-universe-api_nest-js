import {Column} from 'typeorm';
import {BaseOrmEntity} from './baseOrmEntity';

export abstract class BaseLookupOrmEntity extends BaseOrmEntity {
	@Column()
	code: string;

	@Column()
	description: string;
}
