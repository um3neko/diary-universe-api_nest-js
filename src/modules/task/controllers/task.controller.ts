import {Controller, Post} from '@nestjs/common';
import {TaskDto} from './task.dto';
import {TaskService} from 'src/modules/telegram_ai_feature_module/task/services/task.service';

@Controller('task')
export class TaskController {
	constructor(private taskService: TaskService) {}

	@Post()
	async createTasks(taskDto: TaskDto): Promise<any> {
		return await this.taskService.createTask(taskDto);
	}

	// @Post('ai')
	// async aiEndPoint(dto: AiDto): Promise<any> {
	// 	return await this.taskService.createTask(dto);
	// }
}
