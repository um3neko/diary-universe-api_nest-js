import {TaskPriorityEnum} from './priority/taskPriority.enum';
import {TaskStatusEnum} from './status/taskStatus.enum';
import {Task} from './task.entity';
import {TaskRecurrence} from './taskRecurrence.entity';

export interface ITaskRepository {
	findById(id: string): Promise<Task | null>;
	findByName(id: string): Promise<Task | null>;

	save(task: Task): Promise<void>;
	findAll(page?: number, limit?: number): Promise<Task[]>;
	findByStatus(code: TaskStatusEnum): Promise<Task[]>;
	findByPriority(code: TaskPriorityEnum): Promise<Task[]>;
	findByTagId(tagId: string): Promise<Task[]>;
	deleteById(id: string): Promise<void>;
	findByDateRange(start: Date, end: Date): Promise<Task[]>;

	completeTask(id: string, completedAt?: Date, note?: string): Promise<void>;
	updateRecurrence(id: string, recurrenceData: Partial<TaskRecurrence>): Promise<void>;
	updateTask(id: string, updateData: Partial<Task>): Promise<void>;
}
