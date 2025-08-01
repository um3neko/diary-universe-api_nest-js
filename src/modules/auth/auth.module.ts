import {Module} from '@nestjs/common';
import {AuthService} from './services/auth.service';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './strategy/local.strategy';
import {JwtStrategy} from './strategy/jwt.strategy';
import {AuthController} from './controllers/auth.controller';
import {
	TypeOrmUserRepository,
	TypeOrmUserRepositoryToken,
} from 'src/infrastructure/entities/user/user.typeorm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOrmEntity } from 'src/infrastructure/entities/user/user.typeorm';

@Module({
	imports: [
		JwtModule.register({
			secret: 'env',
			signOptions: {
				expiresIn: '1h',
			},
		}),
		PassportModule,
		TypeOrmModule.forFeature([UserOrmEntity]),
	],
	controllers: [AuthController],
	providers: [
		AuthService,
		LocalStrategy,
		JwtStrategy,
		{
			provide: TypeOrmUserRepositoryToken,
			useClass: TypeOrmUserRepository,
		},
	],
})
export class AuthModule {}
