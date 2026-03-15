import { BaseOrmEntity } from "src/infrastructure/base/baseOrmEntity";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { TaskStatusOrmEntity } from "../status/taskStatus.typeorm";

@Entity("task_status_value")
export class TaskStatusValueOrmEntity extends BaseOrmEntity {

  @Column()
  value: number;

  @ManyToOne(() => TaskStatusOrmEntity, (priority) => priority.values)
  @JoinColumn({ name: "status_id" })
  priority: TaskStatusOrmEntity;
}
