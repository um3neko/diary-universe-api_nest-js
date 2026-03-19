import {Injectable} from '@nestjs/common';
import {DataSource} from 'typeorm';
import {TaskStatusOrmEntity} from '../entities/task/status/taskStatus.typeorm';
import {TaskPriorityOrmEntity} from '../entities/task/priority/taskPriority.typeorm';
import {TASK_STATUS_IDS, TASK_PRIORITY_IDS, TASK_TAG_IDS} from './constant';
import {TagOrmEntity} from '../entities/task/tag/tag.typeorm';

@Injectable()
export class SeedService {
	constructor(private readonly dataSource: DataSource) {}

	async seedAll() {
		await this.seedStatuses();
		await this.seedPriorities();
		await this.seedTags();
	}

	private async seedStatuses() {
		const repo = this.dataSource.getRepository(TaskStatusOrmEntity);

		const statuses: Partial<TaskStatusOrmEntity>[] = [
			{id: TASK_STATUS_IDS.TODO, code: 'todo', value: '1'},
			{id: TASK_STATUS_IDS.DONE, code: 'done', value: '2'},
		];

		await repo.upsert(statuses, ['id']);
	}

	private async seedPriorities() {
		const repo = this.dataSource.getRepository(TaskPriorityOrmEntity);

		const priorities: Partial<TaskPriorityOrmEntity>[] = [
			{id: TASK_PRIORITY_IDS.LOW, code: 'low', value: '1'},
			{id: TASK_PRIORITY_IDS.MEDIUM, code: 'medium', value: '2'},
			{id: TASK_PRIORITY_IDS.HIGH, code: 'high', value: '3'},
		];

		await repo.upsert(priorities, ['id']);
	}

	private async seedTags() {
		const repo = this.dataSource.getRepository(TagOrmEntity);

		const tags: Partial<TagOrmEntity>[] = [
			{id: TASK_TAG_IDS.WORK, name: 'Work'},
			{id: TASK_TAG_IDS.PERSONAL, name: 'Personal'},
		];

		await repo.upsert(tags, ['id']);
	}
}
