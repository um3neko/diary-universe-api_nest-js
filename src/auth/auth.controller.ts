import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {AuthPayloadDTO} from 'src/dto/auth/auth.dto';
import {AuthService} from './auth.service';
import {LocalGuard} from './guard/local.guard';
import {Request} from 'express';
import {JwtAuthGuard} from './guard/jwt.guart';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('login')
	@UseGuards(LocalGuard)
	login(@Body() authPayload: AuthPayloadDTO) {
		return this.authService.generateJwt(authPayload);
	}

	@Get('test')
	@UseGuards(JwtAuthGuard)
	test(@Req() req: Request) {
		console.log(req);
		console.log(req.user);
	}
}
