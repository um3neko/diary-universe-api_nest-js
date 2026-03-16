import { BaseOrmEntity } from "src/infrastructure/base/baseOrmEntity";
import { Entity, Column, OneToMany } from "typeorm";
import { TaskStatusValueOrmEntity } from "../statusValue/taskStatusValue.typeorm";

@Entity('task_status')
export class TaskStatusOrmEntity extends BaseOrmEntity {
	@Column()
	  title: string;

	  @Column()
	  level: number;

	  @OneToMany(() => TaskStatusValueOrmEntity, (value) => value.status)
	  statusValues: TaskStatusValueOrmEntity[];

}
