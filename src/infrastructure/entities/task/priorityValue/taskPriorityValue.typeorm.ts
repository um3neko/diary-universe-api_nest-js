import { BaseOrmEntity } from "src/infrastructure/base/baseOrmEntity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { TaskPriorityOrmEntity } from "../priority/taskPriority.typeorm";


@Entity("task_priority_value")
export class TaskPriorityValueOrmEntity extends BaseOrmEntity {

  @Column()
  value: number;

  @ManyToOne(() => TaskPriorityOrmEntity, (priority) => priority.values)
  @JoinColumn({ name: "priority_id" })
  priority: TaskPriorityOrmEntity;
}
