import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDTO } from 'src/dto/auth/auth.dto';

const fakeUser = [
    {
        username: '1',
        password: 'pass'
    },
    {
        username: '2',
        password: 'pass2'
    }
]


@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) { }
    
    validate(authPayloadDto: AuthPayloadDTO) {
        console.log(authPayloadDto);
        const user = fakeUser.find((user) => 
            user.username === authPayloadDto.username);
        
        if(!user) throw new HttpException('User not found', 404);
        
        const {password, ...jwtEntity} = user;
        return this.jwtService.sign(jwtEntity);
    }
}
