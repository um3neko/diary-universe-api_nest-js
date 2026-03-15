import { BaseDomainEntity } from "../../baseEntity";

export enum TaskStatusEnum {
  PENDING = "pending",
  DONE = "done",
}

export class TaskStatus extends BaseDomainEntity {
  private constructor(id: string, createdAt: Date, updatedAt: Date, public readonly status: TaskStatusEnum) {
    super(id, createdAt, updatedAt);
  }

  public static create(status: TaskStatusEnum): TaskStatus {
    const id = crypto.randomUUID();
    const now = new Date();
    return new TaskStatus(id, now, now, status);
  }

  public static restore(id: string, createdAt: Date, updatedAt: Date, status: TaskStatusEnum): TaskStatus {
    return new TaskStatus(id, createdAt, updatedAt, status);
  }
}
