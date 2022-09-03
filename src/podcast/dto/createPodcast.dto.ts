import { ApiProperty } from '@nestjs/swagger';
import { Schema as MongooseSchema } from 'mongoose';

export class CreatePodcastDto {
  @ApiProperty({})
  readonly name: string;

  @ApiProperty({})
  readonly logo: string;

  @ApiProperty({})
  readonly description: string;

  @ApiProperty({})
  readonly URLstreaming: string;

  @ApiProperty({})
  readonly radio: MongooseSchema.Types.ObjectId;
}
