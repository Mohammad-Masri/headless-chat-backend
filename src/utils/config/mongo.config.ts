/* eslint-disable prettier/prettier */
import { MongooseModule } from '@nestjs/mongoose';
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PORT,
  DATABASE_IS_SECURE,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} from './server.config';

export enum ModuleNames {
  USER = 'User',
  USER_DETAILS = 'User_Details',
  USER_DEVICE = 'User_Device',
}

let db_url = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?retryWrites=true&w=majority`;
if (DATABASE_IS_SECURE) {
  db_url = `mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?retryWrites=true&w=majority`;
}

export const Mongoose = MongooseModule.forRoot(db_url);
