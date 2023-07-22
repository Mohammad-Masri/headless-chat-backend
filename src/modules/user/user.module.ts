/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from './user.schema';
import { UserService } from './user.service';
import { ModuleNames } from 'src/utils/config/mongo.config';

import NestModule from 'src/utils/config/nest.config';
import { UserDetailsNestModule } from '../user-details/user-details.module';
import { UserDeviceNestModule } from '../user-device/user-device.module';

export const UserNestModule: NestModule = {
  imports: [
    MongooseModule.forFeature([
      {
        name: ModuleNames.USER,
        schema: UserSchema,
      },
    ]),
    ...UserDetailsNestModule.imports,
    ...UserDeviceNestModule.imports,
  ],
  providers: [
    UserService,
    ...UserDetailsNestModule.providers,
    ...UserDeviceNestModule.providers,
  ],
};

@Module({
  imports: [...UserNestModule.imports],
  controllers: [],
  providers: [...UserNestModule.providers],
})
export class UserModule {}
