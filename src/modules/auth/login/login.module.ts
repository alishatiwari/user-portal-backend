import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtHelper } from '../../../utils/jwt.helper';

@Module({
  controllers: [LoginController],
  providers: [LoginService, JwtHelper],
})
export class LoginModule {}
