/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModuleNames } from 'src/utils/config/mongo.config';
import IUserDevice from './user-device.interface';

@Injectable()
export class UserDeviceService {
  constructor(
    @InjectModel(ModuleNames.USER_DEVICE)
    private readonly UserDeviceModel: Model<IUserDevice>,
  ) {}
}
