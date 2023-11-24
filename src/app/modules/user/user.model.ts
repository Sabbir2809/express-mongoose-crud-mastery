import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import config from "../../config";
import IUser from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    userId: { type: Number, unique: true, required: [true, "userId is required"] },
    username: { type: String, unique: true, lowercase: true, required: [true, "username is required"] },
    password: { type: String, required: [true, "password is required"] },
    fullName: {
      firstName: { type: String, required: [true, "firstName is required"] },
      lastName: { type: String, required: [true, "lastName is required"] },
    },
    age: { type: Number, required: [true, "age is required"] },
    email: { type: String, lowercase: true, required: [true, "email is required"] },
    isActive: { type: Boolean, default: true },
    hobbies: [{ type: String }],
    address: {
      street: { type: String, required: [true, "street is required"] },
      city: { type: String, required: [true, "city is required"] },
      country: { type: String, required: [true, "country is required"] },
    },
    orders: [
      {
        productName: { type: String, required: [true, "productName is required"] },
        price: { type: Number, required: [true, "price is required"] },
        quantity: { type: Number, required: [true, "quantity is required"] },
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

const User = model("User", userSchema);
export default User;
