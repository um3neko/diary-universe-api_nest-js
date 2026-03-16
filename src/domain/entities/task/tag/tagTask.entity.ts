import { BaseDomainEntity } from "../../baseEntity";

export class TaskTag extends BaseDomainEntity {
  private constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly name: string
  ) {
    super(id, createdAt, updatedAt);
  }


  public static create(name: string): TaskTag {
    const id = crypto.randomUUID();
    const now = new Date();
    return new TaskTag(id, now, now, name);
  }

  public static restore(id: string, createdAt: Date, updatedAt: Date, name: string): TaskTag {
    return new TaskTag(id, createdAt, updatedAt, name);
  }
}
