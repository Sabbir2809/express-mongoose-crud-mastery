import { IUser, TOrder } from "./user.interface";
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
      _id: 0,
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

// Add New Product in Order
const addNewProduct = async (userId: number, orderData: TOrder) => {
  const result = await User.findOneAndUpdate(
    { userId: userId },
    {
      $addToSet: {
        orders: orderData,
      },
    },
    {
      upsert: true,
    }
  );
  return result;
};

// Retrieve all orders for a specific user
const getOrdersForUser = async (userId: number) => {
  const result = await User.findOne({ userId }, { _id: 0, orders: 1 });
  return result;
};

// Calculate Total Price of Orders for a Specific User
const calculateTotalPriceForUser = async (userId: number) => {
  const result = await User.aggregate([
    { $match: { userId: userId } },
    {
      $unwind: "$orders",
    },
    {
      $group: {
        _id: null,
        totalPrice: { $sum: { $multiply: ["$orders.price", "$orders.quantity"] } },
      },
    },
    {
      $unwind: "$totalPrice",
    },
    {
      $project: {
        _id: 0,
        totalPrice: 1,
      },
    },
  ]);
  return result;
};

export const userServices = {
  createNewUser,
  getAllUsers,
  getSingleUser,
  updateUserInfo,
  deleteSingleUser,
  addNewProduct,
  getOrdersForUser,
  calculateTotalPriceForUser,
};
