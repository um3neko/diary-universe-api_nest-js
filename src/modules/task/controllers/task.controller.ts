import {Body, Controller, Post} from '@nestjs/common';
import {TaskDto} from './task.dto';
import {TaskService} from 'src/modules/telegram_ai_feature_module/task/services/task.service';

@Controller('task')
export class TaskController {
	constructor(private taskService: TaskService) {}

	@Post('create')
	async create(@Body() taskDTO: TaskDto) {
		return await this.taskService.createTask(taskDTO);
	}
}
