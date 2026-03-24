import {Injectable} from '@nestjs/common';
import {DataSource} from 'typeorm';

import {TaskStatusOrmEntity} from '../entities/task/status/taskStatus.typeorm';
import {TaskPriorityOrmEntity} from '../entities/task/priority/taskPriority.typeorm';
import {TagOrmEntity} from '../entities/task/tag/tag.typeorm';
import {TaskStatusConfig, TaskPriorityConfig, TaskTagConfig} from './constant';
import {TaskPriorityMapper} from '../entities/task/priority/taskPriority.mapper';
import {TaskStatusMapper} from '../entities/task/status/taskStatus.mapper';
import {TagMapper} from '../entities/task/tag/tag.mapper';

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
		const statuses = Object.values(TaskStatusConfig).map(config =>
			TaskStatusMapper.fromConfig(config),
		);

		await repo.upsert(statuses, ['id']);
	}

	private async seedPriorities() {
		const repo = this.dataSource.getRepository(TaskPriorityOrmEntity);
		const priorities = Object.values(TaskPriorityConfig).map(config =>
			TaskPriorityMapper.fromConfig(config),
		);
		await repo.upsert(priorities, ['id']);
	}

	private async seedTags() {
		const repo = this.dataSource.getRepository(TagOrmEntity);
		const tags = Object.values(TaskTagConfig).map(config => TagMapper.fromConfig(config));
		await repo.upsert(tags, ['id']);
	}
}
