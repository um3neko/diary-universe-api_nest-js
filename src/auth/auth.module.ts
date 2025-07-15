import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './strategy/local.strategy';
import {JwtStrategy} from './strategy/jwt.strategy';

@Module({
	imports: [
		JwtModule.register({
			secret: 'env',
			signOptions: {
				expiresIn: '1h',
			},
		}),
		PassportModule,
	],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
