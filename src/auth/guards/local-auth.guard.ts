import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err, user, info, context, status) {
    const request = context.switchToHttp().getRequest();
    const { username, password } = request.body;

    if (err || !user) {
      if (!username) {
        throw new HttpException(
          { message: 'Campo Necesario: Username' },
          HttpStatus.OK,
        );
      } else if (!password) {
        throw new HttpException(
          { message: 'Campo Necesario: Password' },
          HttpStatus.OK,
        );
      } else {
        throw new HttpException(
          { message: 'Usuario no Encontrado' },
          HttpStatus.OK,
        );
      }
    }
    return user;
  }
}
