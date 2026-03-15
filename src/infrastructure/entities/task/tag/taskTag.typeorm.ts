
import { BaseOrmEntity } from "src/infrastructure/base/baseOrmEntity";
import { Entity, Column, ManyToMany } from "typeorm";
import { TaskOrmEntity } from "../task.typeorm";


@Entity("tag")
export class TagOrmEntity extends BaseOrmEntity {

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => TaskOrmEntity, (task) => task.tags)
  tasks: TaskOrmEntity[];

}
