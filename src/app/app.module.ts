import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../database/database.module';
import { ProfileModule } from '../modules/profile/profile.module';
import { RegisterModule } from '../modules/auth/register/register.module';
import { LoginModule } from '../modules/auth/login/login.module';

@Module({
  imports: [DatabaseModule, RegisterModule, LoginModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
