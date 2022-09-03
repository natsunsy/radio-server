import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  async createUser(@Body() request: CreateUserDto) {
    const hashSalt = 10;
    const hashedPassword = await bcrypt.hash(request.password, hashSalt);
    const result = await this.userService.createUser(
      request.email,
      hashedPassword,
      request.name,
    );
    return result;
  }
}
