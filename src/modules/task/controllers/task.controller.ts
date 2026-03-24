import {Body, Controller, Post} from '@nestjs/common';
import {AiDto, CreateTaskDto} from './task.dto';
import {TaskService} from 'src/modules/telegram_ai_feature_module/task/services/task.service';

@Controller('task')
export class TaskController {
	constructor(private taskService: TaskService) {}

	@Post('create')
	async create(@Body() taskDTO: CreateTaskDto) {
		return await this.taskService.createTask(taskDTO);
	}

	//это полная хуйня, бек должен быть у меня гидким, тоесть я должен тупо описать эндпоинты, это телеграм бот будет решать шо куда отправлять!

	@Post('ai')
	async aiEndPoint(@Body() aiDTO: AiDto) {
		console.log(aiDTO);

		switch (aiDTO.type) {
			case 'taskAction':
				switch (aiDTO.actionType) {
					case 'createTask': {
						if (!aiDTO.data) {
							throw new Error('Data is required for create action');
						}
						console.log(aiDTO);
						await this.taskService.createTask(aiDTO.data);
						return {message: 'Task created successfully'};
					}

					case 'getTasks': {
						const tasks = await this.taskService.getAlltasks();
						return {tasks};
					}

					case 'getTodayTasks': {
						const todayTasks = await this.taskService.getDateRangeDayTasks();
						return {tasks: todayTasks};
					}

					case 'completeTask': {
						throw new Error('Invalid AI task action type');
					}

					case 'updateTask': {
						throw new Error('Invalid AI task action type');
					}

					case 'deteteTask': {
						throw new Error('Invalid AI task action type');
					}

					default:
						throw new Error('Invalid AI task action type');
				}
			default:
				throw new Error('Invalid AI action type');
		}
	}
}
