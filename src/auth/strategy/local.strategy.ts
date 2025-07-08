import { PassportStrategy } from "@nestjs/passport";
import {Strategy } from 'passport-local';
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthPayloadDTO } from "src/dto/auth/auth.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super();   
    }

    validate(authPayload: AuthPayloadDTO) {
        console.log(authPayload);
        const user = this.authService.validate(authPayload);
        return user;
    }
}