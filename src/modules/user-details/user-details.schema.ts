/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

const UserDetailsSchema = new mongoose.Schema(
  {
    display_name: {
      type: String,
    },
    profile_image_path: {
      type: String,
    },
  },
  { timestamps: true },
);

UserDetailsSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc: any, ret: any) {
    delete ret._id;
  },
});

export default UserDetailsSchema;
