import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { Response } from '../constants/constants.types';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async getUserByEmail(email: any): Promise<User> {
    console.log('email is r not an object?', email);
    return this.userModel.findOne(email);
  }

  // async findOne(email: string): Promise<User | undefined> {
  //   return this.userModel.find((user) => user.email === email);
  // }

  async createUser(
    email: string,
    password: string,
    name: string,
  ): Promise<Response> {
    return this.userModel
      .create({
        email,
        password,
        name,
      })
      .then((res) => {
        console.log(JSON.stringify(res));
        return {
          motive: 'Success',
          message: 'Usuario creado.',
          statusCode: 200,
          extra: {
            data: res,
          },
        };
      })
      .catch((err) => {
        console.error(err);
        return {
          motive: 'Error',
          message: 'Ocurrio un error inesperado.',
          statusCode: 400,
          extra: {
            err: err.message,
          },
        };
      });
  }
}
