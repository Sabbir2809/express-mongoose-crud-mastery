import IUser from "./user.interface";
import User from "./user.model";

// Create a new user
const createNewUser = async (userData: IUser) => {
  const result = await User.create(userData);
  return result;
};

// Retrieve a list of all users
const getAllUsers = async () => {
  const result = await User.find(
    {},
    {
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      address: 1,
    }
  );
  return result;
};

// Retrieve a specific user by ID
const getSingleUser = async (userId: number) => {
  const result = await User.findOne(
    { userId },
    {
      _id: 0,
      password: 0,
      orders: 0,
    }
  );
  return result;
};

// Update user information
const updateUserInfo = async (userId: number, userData: IUser) => {
  const result = await User.updateOne({ userId }, userData);
  return result;
};

// Delete a user
const deleteSingleUser = async (userId: number) => {
  const result = await User.deleteOne({ userId });
  return result;
};

export const userServices = {
  createNewUser,
  getAllUsers,
  getSingleUser,
  updateUserInfo,
  deleteSingleUser,
};
