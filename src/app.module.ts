import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from './modules/auth/auth.module';
import {typeOrmConfig} from './infrastructure/typeorm.config';
import { TaskModule } from './modules/telegram_ai_feature_module/task/task.module';
import { BookModule } from './modules/reader_feature_module/book/book.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		AuthModule,
		TaskModule,
		BookModule,
		TypeOrmModule.forRoot(typeOrmConfig),
	],
})
export class AppModule {}
