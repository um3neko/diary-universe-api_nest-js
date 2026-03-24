import {BaseOrmEntity} from 'src/infrastructure/base/baseOrmEntity';
import {Entity, Column, JoinColumn, ManyToOne, JoinTable, ManyToMany} from 'typeorm';
import {TaskStatusOrmEntity} from './status/taskStatus.typeorm';
import {TaskPriorityOrmEntity} from './priority/taskPriority.typeorm';
import {TagOrmEntity} from './tag/tag.typeorm';

@Entity('task')
export class TaskOrmEntity extends BaseOrmEntity {
	@Column()
	title: string;

	@Column()
	description: string;

	@Column({type: 'json'})
	prompt: JSON;

	@ManyToOne(() => TaskStatusOrmEntity)
	@JoinColumn({name: 'status_id'})
	status: TaskStatusOrmEntity;

	@ManyToOne(() => TaskPriorityOrmEntity)
	@JoinColumn({name: 'priority_id'})
	priority: TaskPriorityOrmEntity;

	@ManyToMany(() => TagOrmEntity, tag => tag.tasks)
	@JoinTable({
		name: 'task_tag_relation',
		joinColumn: {name: 'task_id'},
		inverseJoinColumn: {name: 'tag_id'},
	})
	tags: TagOrmEntity[];

	@Column({type: 'timestamp', nullable: true})
	deadline?: Date;
}
