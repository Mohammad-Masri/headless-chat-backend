/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModuleNames } from 'src/utils/config/mongo.config';
import IUser from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(ModuleNames.USER)
    private readonly UserModel: Model<IUser>,
  ) {}
}
