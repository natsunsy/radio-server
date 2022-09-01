import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Radio, RadioSchema } from './radio.schema';
import { RadioService } from './radio.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Radio.name, schema: RadioSchema, collection: 'radios' },
    ]),
  ],
  providers: [RadioService],
  exports: [RadioService],
})
export class RadioModule {}
