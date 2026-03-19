import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TaskController} from '../../task/controllers/task.controller';
import {TaskService} from './services/task.service';
import {TaskPriorityOrmEntity} from 'src/infrastructure/entities/task/priority/taskPriority.typeorm';
import {TaskStatusOrmEntity} from 'src/infrastructure/entities/task/status/taskStatus.typeorm';
import {TaskOrmEntity} from 'src/infrastructure/entities/task/task.typeorm';
import {TagOrmEntity} from 'src/infrastructure/entities/task/tag/tag.typeorm';
import {TypeOrmTaskRepository} from 'src/infrastructure/entities/task/task.typeorm.repository';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			TaskOrmEntity,
			TaskStatusOrmEntity,
			TaskPriorityOrmEntity,
			TagOrmEntity,
		]),
	],
	controllers: [TaskController],
	providers: [
		TaskService,
		{
			provide: 'ITaskRepository',
			useClass: TypeOrmTaskRepository,
		},
	],
})
export class TaskModule {}
