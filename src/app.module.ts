import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RadioModule } from './schemas/radio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_ATLAS_CONNECTION),
    RadioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}