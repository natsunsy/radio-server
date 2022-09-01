import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RadioService } from './schemas/radio.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const databaseService = app.get(RadioService);

  console.log('Im waiting for it -->', await databaseService.getAll());

  // app.enableCors();

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
