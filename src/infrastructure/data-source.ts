import 'dotenv/config';
import { DataSource } from 'typeorm';

import { BookOrmEntity } from './entities/book/book.typeorm';
import { BookChapterOrmEntity } from './entities/bookChapter/bookChapter.typeorm';
import { UserOrmEntity } from './entities/user/user.typeorm';

import { ExtensionOrmEntity } from './entities/extension/extension.typeorm';
import { LanguageOrmEntity } from './entities/language/language.typeorm';

import { TaskOrmEntity } from './entities/task/task.typeorm';
import { TaskStatusOrmEntity } from './entities/task/status/taskStatus.typeorm';
import { TaskStatusValueOrmEntity } from './entities/task/statusValue/taskStatusValue.typeorm';
import { TagOrmEntity } from './entities/task/tag/taskTag.typeorm';
import { TaskPriorityOrmEntity } from './entities/task/priority/taskPriority.typeorm';
import { TaskPriorityValueOrmEntity } from './entities/task/priorityValue/taskPriorityValue.typeorm';


export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  entities: [
    BookOrmEntity,
    BookChapterOrmEntity,
    UserOrmEntity,
    ExtensionOrmEntity,
    LanguageOrmEntity,
    TaskOrmEntity,
	TaskStatusOrmEntity,
	TaskStatusValueOrmEntity,
	TaskPriorityOrmEntity,
	TaskPriorityValueOrmEntity,
	TagOrmEntity,
  ],

  migrations: ['./src/infrastructure/migrations/*{.ts,.js}'],
  synchronize: false,
});
