import {BaseOrmEntity} from 'src/infrastructure/base/baseOrmEntity';
import {Column, Entity, OneToOne} from 'typeorm';
import {TaskOrmEntity} from './task.typeorm';

@Entity('task_recurrence')
export class TaskRecurrenceOrmEntity extends BaseOrmEntity {
	@OneToOne(() => TaskOrmEntity, task => task.id)
	tasks: TaskOrmEntity;

	@Column({nullable: false})
	interval: number;

	@Column({nullable: true})
	daysOfWeek: number;

	@Column({type: 'varchar', nullable: true})
	recurrenceType: string;

	@Column({type: 'varchar', nullable: true})
	timeOfDay: string;

	@Column({type: 'timestamp', nullable: true})
	startDate: Date;

	@Column({type: 'timestamp', nullable: true})
	endDate: Date;
}
