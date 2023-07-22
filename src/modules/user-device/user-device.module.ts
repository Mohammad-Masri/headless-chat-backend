/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleNames } from 'src/utils/config/mongo.config';
import NestModule from 'src/utils/config/nest.config';
import UserDeviceSchema from './user-device.schema';
import { UserDeviceService } from './user-device.service';

export const UserDeviceNestModule: NestModule = {
  imports: [
    MongooseModule.forFeature([
      {
        name: ModuleNames.USER_DEVICE,
        schema: UserDeviceSchema,
      },
    ]),
  ],
  providers: [UserDeviceService],
};

@Module({
  imports: [...UserDeviceNestModule.imports],
  controllers: [],
  providers: [...UserDeviceNestModule.providers],
})
export class UserDeviceModule {}
