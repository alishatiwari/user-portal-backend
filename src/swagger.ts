import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RegisterModule } from './modules/auth/register/register.module';
import { LoginModule } from './modules/auth/login/login.module';
import { ProfileModule } from './modules/profile/profile.module';

export const swagger = async (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('User Management APIs')
    .setDescription(
      'API Documentation\
     \n NOTE: The API with (LOCK) symbol can be used only after providing Admin Login API response token in (Authorize)\
     \n -Parameter with * are required to execute related API',
    )
    .setVersion('1.0')
    .addBearerAuth({ type: 'apiKey', name: 'accesstoken', in: 'header' })
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [RegisterModule, LoginModule, ProfileModule],
    deepScanRoutes: true,
  });

  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: 'User APIs',
    explorer: false,
  });
};
