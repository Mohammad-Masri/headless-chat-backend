/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModuleNames } from 'src/utils/config/mongo.config';
import IUserDetails from './user-details.interface';

@Injectable()
export class UserDetailsService {
  constructor(
    @InjectModel(ModuleNames.USER_DETAILS)
    private readonly UserDetailsModel: Model<IUserDetails>,
  ) {}
}
