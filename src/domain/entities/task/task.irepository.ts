import {TaskPriorityEnum} from './priority/taskPriority.entity';
import {TaskStatusEnum} from './status/TaskStatus.entity';
import {Task} from './task.entity';

export interface ITaskRepository {
	findById(id: string): Promise<Task | null>;
	save(task: Task): Promise<void>;
	findAll(page?: number, limit?: number): Promise<Task[]>;
	findByStatus(code: TaskStatusEnum): Promise<Task[]>;
	findByPriority(code: TaskPriorityEnum): Promise<Task[]>;
	findByTagId(tagId: string): Promise<Task[]>;
	deleteById(id: string): Promise<void>;
}
