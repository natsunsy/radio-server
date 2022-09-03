import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new NotAcceptableException('Usuario no Encontrado');
    } else {
      const passwordValid = await bcrypt.compare(pass, user.password);

      if (user && passwordValid) {
        return {
          userId: user._id,
          userName: user.username,
        };
      } else {
        throw new NotAcceptableException('Credenciales Incorrectas');
      }
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
