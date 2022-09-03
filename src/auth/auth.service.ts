import { Dependencies, Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Dependencies(UserService, JwtService)
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  async validateUser(email: string, pass: string): Promise<any> {
    console.log('EXTRAYENDO');
    const user = await this.userService.getUserByEmail(email);
    console.log(user);
    console.log('VALIDANDO');
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // async login(email, password) {
  //   const payload = { email };
  //   return {
  //     motive: 'Success',
  //     message: 'Login Succeed',
  //     statusCode: 200,
  //     access_token: this.jwtService.sign(payload),
  //   };

  // return {
  //   motive: 'Error',
  //   message: 'Ocurrio algo inesperado.',
  //   statusCode: 400,
  //   extra: {
  //     err: err,
  //   },
  // };
  // }
}
