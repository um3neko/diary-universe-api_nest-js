import {HttpException, Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {AuthPayloadDTO} from 'src/dto/auth/auth.dto';

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
	constructor(private jwtService: JwtService) {}

	validate(authPayloadDto: AuthPayloadDTO) {
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
