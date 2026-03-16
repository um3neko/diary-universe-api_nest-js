import 'dotenv/config';
import {TypeOrmModuleOptions} from '@nestjs/typeorm';

// export const typeOrmConfig: TypeOrmModuleOptions = {
// 	type: 'postgres',
// 	host: process.env.DB_HOST,
// 	port: parseInt(process.env.DB_PORT ?? '5432'),
// 	username: process.env.DB_USERNAME,
// 	password: process.env.DB_PASSWORD,
// 	database: process.env.DB_NAME,
// 	entities: [__dirname + '/../**/*.typeorm.{ts,js}'],
// 	synchronize: true,
// };


import { join } from 'path';

const isTs = process.env.NODE_ENV !== 'production';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    isTs
      ? join(__dirname, '/../**/*.typeorm.ts')   // dev: ts-node
      : join(__dirname, '/../**/*.typeorm.js'),  // prod: node dist
  ],
  synchronize: true,
};
