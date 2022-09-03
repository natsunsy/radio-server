import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Radio, RadioDocument } from './radio.schema';
import { Response } from '../constants/constants.types';
import { CreateRadioDto } from './dto/createRadio.dto';
import { UpdateRadioDto } from './dto/updateRadio.dto';

@Injectable()
export class RadioService {
  constructor(
    @InjectModel(Radio.name)
    private radioModel: Model<RadioDocument>,
  ) {}

  async getAll(): Promise<Radio[]> {
    return this.radioModel.find().exec();
  }

  async getRadioById(req: string): Promise<Radio[]> {
    return this.radioModel.findById(req);
  }

  async updateRadio(id: string, req: UpdateRadioDto): Promise<Response> {
    return this.radioModel
      .findByIdAndUpdate(id, req)
      .then((res) => {
        return {
          motive: 'Success',
          message: 'Registro actualizado.',
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

  async deleteRadio(req: string): Promise<Response> {
    return this.radioModel
      .findByIdAndDelete(req)
      .then((res) => {
        return {
          motive: 'Success',
          message: 'Registro eliminado.',
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

  async createRadio(req: CreateRadioDto): Promise<Response> {
    return this.radioModel
      .create(req)
      .then((res) => {
        return {
          motive: 'Success',
          message: 'Registro creado.',
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
