import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDTO } from 'src/dto/auth/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guard/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guard/jwt.guart';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Body() authPayload: AuthPayloadDTO) {
        console.log('abc');
        //return this.authService.generateJwt(authPayload.username);
    }

    @Get('test')
    @UseGuards(JwtAuthGuard)
    test(@Req() req: Request) {
        console.log(req);
        console.log(req.user);
    }
    
}
