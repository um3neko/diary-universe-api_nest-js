import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import {BaseOrmEntity} from '../../base/baseOrmEntity';

@Entity()
export class UserOrmEntity extends BaseOrmEntity {
	@Column()
	username: string;

	@Column()
	email: string;

	@Column()
	password: string;
}
