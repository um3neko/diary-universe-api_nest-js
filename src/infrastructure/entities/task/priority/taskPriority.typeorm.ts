import { BaseOrmEntity } from "src/infrastructure/base/baseOrmEntity";
import { Entity, Column, OneToMany } from "typeorm";
import { TaskPriorityValueOrmEntity } from "../priorityValue/taskPriorityValue.typeorm";

@Entity("task_priority")
export class TaskPriorityOrmEntity extends BaseOrmEntity {

  @Column()
  title: string;

  @Column()
  level: number;

  @OneToMany(() => TaskPriorityValueOrmEntity, (value) => value.priority)
  values: TaskPriorityValueOrmEntity[];
}
