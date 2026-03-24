import {BaseOrmEntity} from 'src/infrastructure/base/baseOrmEntity';
import {Column, Entity, ManyToMany} from 'typeorm';
import {TaskOrmEntity} from '../task.typeorm';

@Entity('tag')
export class TagOrmEntity extends BaseOrmEntity {
	@Column({unique: true})
	name: string;

	@ManyToMany(() => TaskOrmEntity, task => task.tags)
	tasks: TaskOrmEntity[];

	@Column({type: 'varchar', nullable: true})
	emojiCode: string;

	@Column({type: 'varchar', unique: true})
	code: string;
}
