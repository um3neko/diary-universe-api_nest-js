import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BookDomainModule} from './book-domain/book-domain.module';
import {AuthModule} from './auth/auth.module';
import {typeOrmConfig} from './constants/typeorm.config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		AuthModule,
		TypeOrmModule.forRoot(typeOrmConfig),
		BookDomainModule,
	],
})
export class AppModule {}
