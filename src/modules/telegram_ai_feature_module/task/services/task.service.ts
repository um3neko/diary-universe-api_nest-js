import {Injectable, Inject} from '@nestjs/common';
import {
	TaskPriority,
	TaskPriorityEnum,
} from 'src/domain/entities/task/priority/taskPriority.entity';
import {TaskStatus, TaskStatusEnum} from 'src/domain/entities/task/status/TaskStatus.entity';
import {Task} from 'src/domain/entities/task/task.entity';
import {ITaskRepository} from 'src/domain/entities/task/task.irepository';
import {TaskDto} from 'src/modules/task/controllers/task.dto';

@Injectable()
export class TaskService {
	constructor(@Inject('ITaskRepository') private readonly taskRepository: ITaskRepository) {}
	async createTask(taskDTO: TaskDto): Promise<void> {
		//TODO: prio default value - to change
		const task = Task.create({
			title: taskDTO.title,
			description: taskDTO.description,
			status: TaskStatus.create(TaskStatusEnum.TODO),
			priority: TaskPriority.create(TaskPriorityEnum.LOW),
			tags: taskDTO.tags || [],
			prompt: taskDTO.prompt,
		});
		console.log(task);
		await this.taskRepository.save(task);
	}
}
