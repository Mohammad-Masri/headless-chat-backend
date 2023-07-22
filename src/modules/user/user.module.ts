/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from './user.schema';
import { UserService } from './user.service';
import { ModuleNames } from 'src/utils/config/mongo.config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ModuleNames.USER,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [UserService],
})
export class UserModule {}
