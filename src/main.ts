import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Radio-server')
    .setDescription('API to manage radios with MongoDB Atlas')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  // Documentation Route
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
