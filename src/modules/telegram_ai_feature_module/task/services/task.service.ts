import {Injectable, Inject} from '@nestjs/common';
import {TaskPriority} from 'src/domain/entities/task/priority/taskPriority.entity';
import {TaskStatusEnum} from 'src/domain/entities/task/status/taskStatus.enum';
import {TaskPriorityEnum} from 'src/domain/entities/task/priority/taskPriority.enum';
import {Task} from 'src/domain/entities/task/task.entity';
import {ITaskRepository} from 'src/domain/entities/task/task.irepository';
import {CreateTaskDto, GetRangeTasksDto} from 'src/modules/task/controllers/task.dto';
import {TaskStatus} from 'src/domain/entities/task/status/taskStatus.entity';
import {TaskRecurrence} from 'src/domain/entities/task/taskRecurrence.entity';

@Injectable()
export class TaskService {
	constructor(@Inject('ITaskRepository') private readonly taskRepository: ITaskRepository) {}

	async createTask(taskDTO: CreateTaskDto): Promise<void> {
		const task = Task.create({
			title: taskDTO.title,
			description: taskDTO.description,
			status: TaskStatus.get(TaskStatusEnum.TODO),
			priority: TaskPriority.get(taskDTO.priority || TaskPriorityEnum.MEDIUM),
			tags: taskDTO.tags || [],
			prompt: taskDTO.prompt,
			deadline: taskDTO.deadline ? new Date(taskDTO.deadline) : undefined,
		});

		//TODO: finish
		if (taskDTO.recurrence) {
			const reccurenceTask = TaskRecurrence.create({
				task: task,
				type: taskDTO.recurrence.type,
				interval: taskDTO.recurrence.interval,
				daysOfWeek: taskDTO.recurrence.daysOfWeek,
				timeOfDay: taskDTO.recurrence.timeOfDay,
			});
		}

		console.log(task);
		await this.taskRepository.save(task);
	}

	async getAlltasks(): Promise<Task[]> {
		return await this.taskRepository.findAll();
	}

	async getDateRangeDayTasks(data: GetRangeTasksDto): Promise<Task[]> {
		const startDate = new Date(data.startDate);
		const endDate = new Date(data.endDate);

		return await this.taskRepository.findByDateRange(startDate, endDate);
	}
}
