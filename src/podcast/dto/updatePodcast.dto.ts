import { PartialType } from '@nestjs/swagger';
import { CreatePodcastDto } from './createPodcast.dto';

export class UpdatePodcastDto extends PartialType(CreatePodcastDto) {}
