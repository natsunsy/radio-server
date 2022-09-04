import {
  Body,
  Controller,
  Post,
  HttpException,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreatePodcastDto } from './dto/createPodcast.dto';
import { UpdatePodcastDto } from './dto/updatePodcast.dto';
import { PodcastService } from './podcast.service';

@Controller('api/podcast')
export class PodcastController {
  constructor(private podcastService: PodcastService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createPodcast(@Body() request: CreatePodcastDto) {
    try {
      return await this.podcastService.createPodcast(request);
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getPodcastById(@Param('id') id: string) {
    try {
      return await this.podcastService.getPodcastById(id);
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllPodcasts() {
    try {
      return await this.podcastService.getAll();
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updatePodcast(
    @Param('id') id: string,
    @Body() request: UpdatePodcastDto,
  ) {
    try {
      return await this.podcastService.updatePodcast(id, request);
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removePodcast(@Param('id') id: string) {
    try {
      return await this.podcastService.deletePodcast(id);
    } catch (error) {
      throw new HttpException(`Ocurrio un error inesperado: [${error}]`, 400);
    }
  }
}
