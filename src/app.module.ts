import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RadioModule } from './radio/radio.module';
import { PodcastModule } from './podcast/podcast.module';

const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV || ENV == 'production' ? '.env' : `.env.${ENV}`,
    }),
    MongooseModule.forRoot(process.env.MONGO_ATLAS_CONNECTION),
    AuthModule,
    UserModule,
    RadioModule,
    PodcastModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
