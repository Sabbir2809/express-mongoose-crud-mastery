import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import config from "../../config";
import IUser from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    userId: { type: Number, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    fullName: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    hobbies: [{ type: String }],
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    orders: [
      {
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
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

// middleware
// userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
//   this.find().projection({ password: 0 });
//   next();
// });

const User = model("User", userSchema);
export default User;
