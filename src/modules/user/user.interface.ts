/* eslint-disable prettier/prettier */
import { ObjectId } from 'mongoose';

export default interface IUser {
  id: ObjectId;
  username: string;
  password: string;
  public_key: string;
}
