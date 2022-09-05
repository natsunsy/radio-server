import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('users')
    private userModel: Model<UserDocument>,
  ) {}

  async getUserByUsername(username: any): Promise<any> {
    return this.userModel.findOne({ username: username });
  }

  async createUser(username: string, password: string): Promise<Response> {
    return this.userModel
      .create({
        username,
        password,
      })
      .then((res) => {
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

export type Response = {
  motive: string;
  message: string;
  statusCode: number;
  extra?: Extra;
};

export type Extra = {
  data?: any;
  err?: string;
};
