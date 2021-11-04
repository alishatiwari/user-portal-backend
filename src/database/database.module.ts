import { Module } from '@nestjs/common';
import { Databaseprovider } from './database.provider';

@Module({
  providers: [Databaseprovider],
})
export class DatabaseModule {}
