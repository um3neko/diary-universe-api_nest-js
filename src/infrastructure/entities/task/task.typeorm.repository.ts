import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Task} from 'src/domain/entities/task/task.entity';
import {ITaskRepository} from 'src/domain/entities/task/task.irepository';
import {BaseRepository} from 'src/infrastructure/base/baseRepository';
import {TaskMapper} from './task.mapper';
import {TaskOrmEntity} from './task.typeorm';
import {TaskPriorityEnum} from 'src/domain/entities/task/priority/taskPriority.enum';
import {TaskRecurrence} from 'src/domain/entities/task/taskRecurrence.entity';
import {TaskStatusEnum} from 'src/domain/entities/task/status/taskStatus.enum';

export const TypeOrmTaskRepositoryToken = Symbol('TypeOrmTaskRepository');

@Injectable()
export class TypeOrmTaskRepository
	extends BaseRepository<TaskOrmEntity, Task>
	implements ITaskRepository
{
	constructor(
		@InjectRepository(TaskOrmEntity)
		repo: Repository<TaskOrmEntity>,
	) {
		super(repo, TaskMapper);
	}
	updateTask(id: string, updateData: Partial<Task>): Promise<void> {
		throw new Error('Method not implemented.');
	}

	findByName(id: string): Promise<Task | null> {
		throw new Error('Method not implemented.');
	}

	completeTask(id: string, completedAt?: Date, note?: string): Promise<void> {
		throw new Error('Method not implemented.');
	}

	updateRecurrence(id: string, recurrenceData: Partial<TaskRecurrence>): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async findAll(page = 1, limit = 20): Promise<Task[]> {
		const [ormTasks] = await this.repo.findAndCount({
			skip: (page - 1) * limit,
			take: limit,
			order: {createdAt: 'DESC'},
			relations: ['status', 'priority', 'tags'],
		});
		return ormTasks.map(task => this.mapper.toDomain(task));
	}

	async findByDateRange(start: Date, end: Date): Promise<Task[]> {
		const ormTasks = await this.repo
			.createQueryBuilder('task')
			.leftJoinAndSelect('task.status', 'status')
			.leftJoinAndSelect('task.priority', 'priority')
			.leftJoinAndSelect('task.tags', 'tags')
			.where('task.deadline >= :start AND task.deadline < :end', {start, end})
			.getMany();
		return ormTasks.map(task => this.mapper.toDomain(task));
	}

	async findByStatus(code: TaskStatusEnum): Promise<Task[]> {
		const ormTasks = await this.repo.find({
			where: {status: {code}},
			relations: ['status', 'priority', 'tags'],
		});
		return ormTasks.map(task => this.mapper.toDomain(task));
	}

	async findByPriority(code: TaskPriorityEnum): Promise<Task[]> {
		const ormTasks = await this.repo.find({
			where: {priority: {code}},
			relations: ['status', 'priority', 'tags'],
		});
		return ormTasks.map(task => this.mapper.toDomain(task));
	}

	async findByTagId(tagId: string): Promise<Task[]> {
		const ormTasks = await this.repo
			.createQueryBuilder('task')
			.leftJoinAndSelect('task.status', 'status')
			.leftJoinAndSelect('task.priority', 'priority')
			.leftJoinAndSelect('task.tags', 'tag')
			.where('tag.id = :tagId', {tagId})
			.getMany();
		return ormTasks.map(task => this.mapper.toDomain(task));
	}

	async deleteById(id: string): Promise<void> {
		await this.repo.delete(id);
	}
}
