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
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

// Update user information
const updateUserInfo = async (id: string, userData: IUser): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
  return result;
};

// Delete a user
const deleteSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const userServices = {
  createNewUser,
  getAllUsers,
  getSingleUser,
  updateUserInfo,
  deleteSingleUser,
};
