import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './user/dto/createUser.dto';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('users/signup')
  async createUser(@Body() request: CreateUserDto) {
    const hashSalt = 10;
    const hashedPassword = await bcrypt.hash(request.password, hashSalt);
    const result = await this.userService.createUser(
      request.username,
      hashedPassword,
    );
    return result;
  }

  // Test Endpoint
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
