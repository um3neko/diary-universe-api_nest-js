import { BaseOrmEntity } from "src/infrastructure/base/baseOrmEntity";
import { Entity, Column, JoinColumn, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { TaskStatusOrmEntity } from "./status/taskStatus.typeorm";
import { TaskPriorityOrmEntity } from "./priority/taskPriority.typeorm";
import { TagOrmEntity } from "./tag/taskTag.typeorm";

@Entity('task')
export class TaskOrmEntity extends BaseOrmEntity {
	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskStatusOrmEntity)
    @JoinColumn({ name: "status_id" })
    status: TaskStatusOrmEntity;


	@ManyToOne(() => TaskPriorityOrmEntity)
    @JoinColumn({ name: "priority_id" })
    priority: TaskPriorityOrmEntity;

	@ManyToMany(() => TagOrmEntity, (tag) => tag.tasks)
  	@JoinTable({
		name: "task_tag",
		joinColumn: { name: "task_id" },
		inverseJoinColumn: { name: "tag_id" }
	})
  	tags: TagOrmEntity[];

}
