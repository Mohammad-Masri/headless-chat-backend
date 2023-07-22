import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { Mongoose } from './utils/config/mongo.config';

@Module({
  imports: [Mongoose, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
