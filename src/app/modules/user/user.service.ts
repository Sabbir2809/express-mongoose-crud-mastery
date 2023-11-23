import IUser from "./user.interface";
import User from "./user.model";

// Create a new user
const createNewUser = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData);
  return result;
};

// Retrieve a list of all users
const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

// Retrieve a specific user by ID
const getSingleUser = async (userId: number): Promise<IUser | null> => {
  const result = await User.findOne({ userId });
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
