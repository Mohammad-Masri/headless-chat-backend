/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

const UserDeviceSchema = new mongoose.Schema(
  {
    device_id: {
      type: String,
    },
    is_online: {
      type: Boolean,
    },
    is_safe: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

UserDeviceSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc: any, ret: any) {
    delete ret._id;
  },
});

export default UserDeviceSchema;
