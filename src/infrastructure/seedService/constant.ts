import {TaskPriorityEnum} from 'src/domain/entities/task/priority/taskPriority.enum';
import {TaskTagEnum} from 'src/domain/entities/task/tag/taskTag.enum';
import {TaskStatusEnum} from 'src/domain/entities/task/status/taskStatus.enum';

export const TaskStatusConfig = [
	{
		id: '43abd6bc-398a-4314-8529-61fc8c07061f',
		value: '1',
		code: TaskStatusEnum.TODO,
		emojiCode: '📝',
	},
	{
		id: '2a4edd10-89df-4fc7-bb7f-0145ea48e962',
		value: '2',
		code: TaskStatusEnum.DONE,
		emojiCode: '✅',
	},
] as const;
export type TaskStatusConfigItem = (typeof TaskStatusConfig)[number];

export const TaskPriorityConfig = [
	{
		id: 'e28a6119-5b8b-452c-aa7e-e08fb3481688',
		value: '1',
		code: TaskPriorityEnum.VERY_LOW,
		emojiCode: '🟢',
	},
	{
		id: '44cc6d11-b986-41f8-93a0-b3c903db8ca2',
		value: '2',
		code: TaskPriorityEnum.LOW,
		emojiCode: '🟡',
	},
	{
		id: 'c3173504-98c5-47aa-9c39-e8bb69b96f5d',
		value: '3',
		code: TaskPriorityEnum.MEDIUM,
		emojiCode: '🟠',
	},
	{
		id: 'db530ccf-09a3-4468-9c37-31a1cd3b407e',
		value: '4',
		code: TaskPriorityEnum.HIGH,
		emojiCode: '🔴',
	},
	{
		id: '9348757a-3120-4e79-97a1-b131c51dfb87',
		value: '5',
		code: TaskPriorityEnum.VERY_HIGH,
		emojiCode: '💥',
	},
] as const;
export type TaskPriorityConfigItem = (typeof TaskPriorityConfig)[number];

export const TaskTagConfig = [
	{
		id: 'a1f1c1a0-1111-4a11-8111-aaaaaaaaaaaa',
		name: 'work',
		code: TaskTagEnum.WORK,
		emojiCode: '💼',
	},
	{
		id: 'b2f2c2b0-2222-4b22-8222-bbbbbbbbbbbb',
		name: 'study',
		code: TaskTagEnum.STUDY,
		emojiCode: '📚',
	},
	{
		id: 'c3f3c3c0-3333-4c33-8333-cccccccccccc',
		name: 'health',
		code: TaskTagEnum.HEALTH,
		emojiCode: '🧠',
	},
	{
		id: 'd4f4d4d0-4444-4d44-8444-dddddddddddd',
		name: 'sport',
		code: TaskTagEnum.SPORT,
		emojiCode: '💪',
	},
	{
		id: 'e5f5e5e0-5555-4e55-8555-eeeeeeeeeeee',
		name: 'personal',
		code: TaskTagEnum.PERSONAL,
		emojiCode: '🏠',
	},
	{
		id: 'f6f6f6f0-6666-4f66-8666-ffffffffffff',
		name: 'finance',
		code: TaskTagEnum.FINANCE,
		emojiCode: '💰',
	},
	{
		id: 'a7a7a7a0-7777-4a77-8777-111111111111',
		name: 'social',
		code: TaskTagEnum.SOCIAL,
		emojiCode: '👥',
	},
	{
		id: 'b8b8b8b0-8888-4b88-8888-222222222222',
		name: 'project',
		code: TaskTagEnum.PROJECT,
		emojiCode: '🚀',
	},
	{
		id: 'c9c9c9c0-9999-4c99-8999-333333333333',
		name: 'routine',
		code: TaskTagEnum.ROUTINE,
		emojiCode: '🔁',
	},
	{
		id: 'd0d0d0d0-0000-4d00-8000-444444444444',
		name: 'idea',
		code: TaskTagEnum.IDEA,
		emojiCode: '💡',
	},
	{
		id: 'e1e1e1e1-1111-4e11-8111-555555555555',
		name: 'urgent',
		code: TaskTagEnum.URGENT,
		emojiCode: '⚡',
	},
	{
		id: 'f2f2f2f2-2222-4f22-8222-666666666666',
		name: 'home',
		code: TaskTagEnum.HOME,
		emojiCode: '🏡',
	},
] as const;
export type TaskTagConfigItem = (typeof TaskTagConfig)[number];

export const TaskStatusMap = TaskStatusConfig.reduce(
	(acc, config) => {
		acc[config.code] = config;
		return acc;
	},
	{} as Record<TaskStatusEnum, TaskStatusConfigItem>,
);

export const TaskPriorityMap = TaskPriorityConfig.reduce(
	(acc, config) => {
		acc[config.code] = config;
		return acc;
	},
	{} as Record<TaskPriorityEnum, TaskPriorityConfigItem>,
);

export const TaskTagMap = TaskTagConfig.reduce(
	(acc, config) => {
		acc[config.code] = config;
		return acc;
	},
	{} as Record<TaskTagEnum, TaskTagConfigItem>,
);
