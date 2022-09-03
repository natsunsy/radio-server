import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from '../constants/constants.types';
import { CreatePodcastDto } from './dto/createPodcast.dto';
import { UpdatePodcastDto } from './dto/updatePodcast.dto';
import { Podcast, PodcastDocument } from './podcast.schema';

@Injectable()
export class PodcastService {
  constructor(
    @InjectModel(Podcast.name)
    private podcastModel: Model<PodcastDocument>,
  ) {}

  async getAll(): Promise<Podcast[]> {
    return this.podcastModel.find().exec();
  }

  async getPodcastById(req: string): Promise<Podcast> {
    return this.podcastModel.findById(req);
  }

  async updatePodcast(id: string, req: UpdatePodcastDto): Promise<Response> {
    return this.podcastModel
      .findByIdAndUpdate(id, req)
      .then((res) => {
        console.log(JSON.stringify(res));
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

  async deletePodcast(req: string): Promise<Response> {
    return this.podcastModel
      .findByIdAndDelete(req)
      .then((res) => {
        console.log(JSON.stringify(res));
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

  async createPodcast(req: CreatePodcastDto): Promise<Response> {
    return this.podcastModel
      .create(req)
      .then((res) => {
        console.log(JSON.stringify(res));
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
