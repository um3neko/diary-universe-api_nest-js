import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from './modules/auth/auth.module';
import {typeOrmConfig} from './infrastructure/typeorm.config';
import {TaskModule} from './modules/telegram_ai_feature_module/task/task.module';
import {BookModule} from './modules/reader_feature_module/book/book.module';
import {SeedModule} from './infrastructure/seedService/seed.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRoot(typeOrmConfig),
		AuthModule,
		SeedModule,
		TaskModule,
		BookModule,
	],
})
export class AppModule {}
