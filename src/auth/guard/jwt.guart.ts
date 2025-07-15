import {AuthGuard} from '@nestjs/passport';
import {ExecutionContext, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';

export class JwtAuthGuard extends AuthGuard('jwt') {
	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		console.log('heh2');
		return super.canActivate(context);
	}
}
