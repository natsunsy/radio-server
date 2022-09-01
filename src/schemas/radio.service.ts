import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Radio, RadioDocument } from './radio.schema';

@Injectable()
export class RadioService {
  constructor(
    @InjectModel(Radio.name)
    private radioModel: Model<RadioDocument>,
  ) {}

  async getAll(): Promise<Radio[]> {
    return this.radioModel.find().exec();
  }
}
