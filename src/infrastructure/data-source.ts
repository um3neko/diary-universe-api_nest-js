import 'dotenv/config';
import {DataSource} from 'typeorm';
import {BookOrmEntity} from './entities/book/book.typeorm';
import {BookChapterOrmEntity} from './entities/bookChapter/bookChapter.typeorm';
import {UserOrmEntity} from './entities/user/user.typeorm';

export default new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT ?? '5432'),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [BookChapterOrmEntity, UserOrmEntity, BookOrmEntity],
	migrations: ['./src/infrastructure/migrations/*{.ts,.js}'],
	synchronize: false,
});
