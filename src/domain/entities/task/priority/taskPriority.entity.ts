import { BaseDomainEntity } from "../../baseEntity";

export enum PriorityLevel {
  VERY_LOW = 1,   // Слабо
  LOW = 2,        // Немного
  MEDIUM = 3,     // Средне
  HIGH = 4,       // Сильно
  VERY_HIGH = 5   // Очень сильно
}

export class TaskPriority extends BaseDomainEntity {
  private constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly level: PriorityLevel
  ) {
    super(id, createdAt, updatedAt);
  }

  public static create(level: PriorityLevel): TaskPriority {
    const id = crypto.randomUUID();
    const now = new Date();
    return new TaskPriority(id, now, now, level);
  }

  public static restore(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    level: PriorityLevel
  ): TaskPriority {
    return new TaskPriority(id, createdAt, updatedAt, level);
  }

  // типо ))0
  // надо локализацию
  public getLabel(): string {
    switch (this.level) {
      case PriorityLevel.VERY_LOW: return "Слабо";
      case PriorityLevel.LOW: return "Немного";
      case PriorityLevel.MEDIUM: return "Средне";
      case PriorityLevel.HIGH: return "Сильно";
      case PriorityLevel.VERY_HIGH: return "Очень сильно";
    }
  }
}
