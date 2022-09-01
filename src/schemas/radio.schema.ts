import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type RadioDocument = Radio & Document;

@Schema()
export class Radio {
  @Prop({ required: true, unique: true })
  id: MongooseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  logo: string;

  @Prop()
  description: string;

  @Prop()
  slogan: string;

  @Prop()
  URLstreaming: string;
}

export const RadioSchema = SchemaFactory.createForClass(Radio);
