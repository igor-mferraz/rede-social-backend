import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(dto: LoginDto): Promise<{ access_token: string }> {
        const user = await this.userService.findbyEmail(dto.email);
        if (user?.password !== dto.password) {
            throw new UnauthorizedException();
        }

        const payload = { id: user.id, name: user.name};
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
