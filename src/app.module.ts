import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from './modules/auth/auth.module';
import {typeOrmConfig} from './infrastructure/typeorm.config';
import {BookModule} from './modules/book/book.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		AuthModule,
		BookModule,
		TypeOrmModule.forRoot(typeOrmConfig),
	],
})
export class AppModule {}
