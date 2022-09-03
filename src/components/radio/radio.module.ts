import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Radio, RadioSchema } from './radio.schema';
import { RadioController } from './radio.controller';
import { RadioService } from './radio.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Radio.name, schema: RadioSchema, collection: 'radios' },
    ]),
  ],
  controllers: [RadioController],
  providers: [RadioService],
  exports: [RadioService],
})
export class RadioModule {}
