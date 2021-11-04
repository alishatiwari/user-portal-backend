import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { appConfig } from './config/env';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { swagger } from './swagger';
import { ValidationPipe } from './validations/validation.pipe';
import { ResponseInterceptor } from './dispatchers/response.interceptor';
import { AllExceptionsFilter } from './dispatchers/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.enableCors();
  app.use(helmet());
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  swagger(app);
  await app.listen(appConfig.port);
  console.log('Server started listening on port:', appConfig.port);
}
bootstrap();
