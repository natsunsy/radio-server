import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PodcastController } from './podcast.controller';
import { Podcast, PodcastSchema } from './podcast.schema';
import { PodcastService } from './podcast.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Podcast.name, schema: PodcastSchema, collection: 'podcasts' },
    ]),
  ],
  controllers: [PodcastController],
  providers: [PodcastService],
  exports: [PodcastService],
})
export class PodcastModule {}
