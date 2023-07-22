import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { Mongoose } from './utils/config/mongo.config';
import { UserDetailsModule } from './modules/user-details/user-details.module';
import { UserDeviceModule } from './modules/user-device/user-device.module';

@Module({
  imports: [Mongoose, UserModule, UserDetailsModule, UserDeviceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
