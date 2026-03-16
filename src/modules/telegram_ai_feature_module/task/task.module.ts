import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import { TaskPriorityOrmEntity } from 'src/infrastructure/entities/task/priority/taskPriority.typeorm';
import { TaskStatusOrmEntity } from 'src/infrastructure/entities/task/status/taskStatus.typeorm';
import { TaskStatusValueOrmEntity } from 'src/infrastructure/entities/task/statusValue/taskStatusValue.typeorm';
import { TaskOrmEntity } from 'src/infrastructure/entities/task/task.typeorm';
import { TagOrmEntity } from 'src/infrastructure/entities/task/tag/taskTag.typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TaskOrmEntity,
      TaskStatusOrmEntity,
      TaskStatusValueOrmEntity,
      TaskPriorityOrmEntity,
      TagOrmEntity,
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
