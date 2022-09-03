import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Radio } from '../radio/radio.schema';

export type PodcastDocument = Podcast & Document;

@Schema()
export class Podcast {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  logo: string;

  @Prop()
  description: string;

  @Prop()
  URLstreaming: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Radio.name,
    required: true,
  })
  radio: MongooseSchema.Types.ObjectId;
}

export const PodcastSchema = SchemaFactory.createForClass(Podcast);
