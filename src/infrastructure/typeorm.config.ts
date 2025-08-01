import 'dotenv/config';
import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {BookChapterOrmEntity} from './entities/bookChapter/bookChapter.typeorm';
import {UserOrmEntity} from './entities/user/user.typeorm';
import {BookOrmEntity} from './entities/book/book.typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT ?? '5432'),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [BookChapterOrmEntity, UserOrmEntity, BookOrmEntity],
	synchronize: true,
};
