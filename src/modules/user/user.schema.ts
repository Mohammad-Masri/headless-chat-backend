/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    public_key: {
      type: String,
    },
  },
  { timestamps: true },
);

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc: any, ret: any) {
    delete ret._id;
  },
});

export default UserSchema;
