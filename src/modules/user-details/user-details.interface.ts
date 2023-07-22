/* eslint-disable prettier/prettier */
import { ObjectId } from 'mongoose';

export default interface IUserDetails {
  id: ObjectId;
  display_name: string;
  profile_image_path: string;
}
