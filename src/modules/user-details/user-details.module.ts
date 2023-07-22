/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UserDetailsSchema from './user-details.schema';
import { UserDetailsService } from './user-details.service';
import { ModuleNames } from 'src/utils/config/mongo.config';
import NestModule from 'src/utils/config/nest.config';

export const UserDetailsNestModule: NestModule = {
  imports: [
    MongooseModule.forFeature([
      {
        name: ModuleNames.USER_DETAILS,
        schema: UserDetailsSchema,
      },
    ]),
  ],
  providers: [UserDetailsService],
};

@Module({
  imports: [...UserDetailsNestModule.imports],
  controllers: [],
  providers: [...UserDetailsNestModule.providers],
})
export class UserDetailsModule {}
