import {BaseOrmEntity} from 'src/infrastructure/base/baseOrmEntity';
import {Column, Entity, OneToOne} from 'typeorm';
import {TaskOrmEntity} from './task.typeorm';

@Entity('task_completion')
export class TaskCompletionOrmEntity extends BaseOrmEntity {
	@Column({nullable: true})
	note: string;

	@Column({type: 'timestamp'})
	completedAt: Date;

	@OneToOne(() => TaskOrmEntity, task => task.id)
	tasks: TaskOrmEntity;
}
