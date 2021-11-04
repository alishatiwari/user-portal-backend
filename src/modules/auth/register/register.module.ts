import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { Users } from '../../../entities/user.entity';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService, Users],
})
export class RegisterModule {}
