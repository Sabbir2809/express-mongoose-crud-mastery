import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import config from "../../config";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    userId: { type: Number, unique: true },
    username: { type: String, unique: true, lowercase: true },
    password: { type: String },
    fullName: {
      firstName: { type: String },
      lastName: { type: String },
    },
    age: { type: Number },
    email: { type: String, lowercase: true },
    isActive: { type: Boolean, default: true },
    hobbies: [{ type: String }],
    address: {
      street: { type: String },
      city: { type: String },
      country: { type: String },
    },
    orders: [
      {
        productName: { type: String },
        price: { type: Number },
        quantity: { type: Number },
      },
    ],
  },
  { versionKey: false, timestamps: false }
);

// password hashing
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds));
  next();
});

const User = model<IUser>("User", userSchema);
export default User;
