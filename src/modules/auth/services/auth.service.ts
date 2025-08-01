import {HttpException, Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {UserRepository} from 'src/domain/entities/user/user.repository';
import {
	TypeOrmUserRepository,
	TypeOrmUserRepositoryToken,
} from 'src/infrastructure/entities/user/user.typeorm.repository';
import {AuthPayloadDTO} from 'src/modules/auth/dto/auth.dto';

const fakeUser = [
	{
		email: '1',
		password: 'pass',
	},
	{
		email: '2',
		password: 'pass2',
	},
	{
		email: 'q',
		password: 'q',
	},
];

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService,
		@Inject(TypeOrmUserRepositoryToken) private readonly authRepository: UserRepository,
	) {}

	async validate(authPayloadDto: AuthPayloadDTO) {
		const user = fakeUser.find(u => u.email === authPayloadDto.email);
		
		if (!user || user.password !== authPayloadDto.password) {
			throw new UnauthorizedException('Invalid credentials');
		}
		const {password: _, ...userData} = user;
		return userData;
	}

	//to change
	async generateJwt(authPayloadDto: AuthPayloadDTO) {
		const user: any = authPayloadDto;
		const payload = {
			sub: user.id,
			email: user.email,
		};

		return {
			accessToken: this.jwtService.sign(payload, {expiresIn: '1h'}),
		};
	}
}
