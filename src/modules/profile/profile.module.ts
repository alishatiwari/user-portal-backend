import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { JwtHelper } from '../../utils/jwt.helper';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, JwtHelper],
})
export class ProfileModule {}
