import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';

@Module({
  imports: [Mongoose],
  controllers: [],
  providers: [],
})
export class AppModule {}
