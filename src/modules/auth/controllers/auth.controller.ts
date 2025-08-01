import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {AuthPayloadDTO} from 'src/modules/auth/dto/auth.dto';
import {Request} from 'express';
import { JwtAuthGuard } from '../guard/jwt.guart';
import { LocalGuard } from '../guard/local.guard';
import { AuthService } from '../services/auth.service';


@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('login')
	@UseGuards(LocalGuard)
	async login(@Body() authPayload: AuthPayloadDTO) {
			return await this.authService.generateJwt(authPayload);
	}

	@Get('test')
	@UseGuards(JwtAuthGuard)
	async test(@Req() req: Request) {
		console.log(req);
		console.log(req.user);
	}
}
