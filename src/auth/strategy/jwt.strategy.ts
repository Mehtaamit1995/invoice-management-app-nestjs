import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from '../../users/user.model';

import { UsersService } from '../../users/users.service';
import { JWT_SECRET } from '../constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET
        })
    }

    validate(validationPayload: { email: string, sub: string }): User | null {
        return this.usersService.getUserByEmail(validationPayload.email);
    }
}