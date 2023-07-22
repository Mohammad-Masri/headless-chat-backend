/* eslint-disable prettier/prettier */
import { ObjectId } from 'mongoose';

export default interface IUserDevice {
  id: ObjectId;
  device_id: string;
  is_online: boolean;
  is_safe: boolean;
}
