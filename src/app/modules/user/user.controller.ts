import { Request, Response } from "express";
import { userServices } from "./user.service";
import userZodValidationSchema from "./user.zod.validation";

// Create a new user
const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    // Zod Validation
    const zodParseData = userZodValidationSchema.parse(userData);

    const newUser = await userServices.createNewUser(zodParseData);

    const responseData = {
      userId: newUser.userId,
      username: newUser.username,
      fullName: newUser.fullName,
      age: newUser.age,
      email: newUser.email,
      isActive: newUser.isActive,
      hobbies: newUser.hobbies,
      address: newUser.address,
    };

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: responseData,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

// Retrieve a list of all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

// Retrieve a specific user by ID
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getSingleUser(userId);

    // Error Response
    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

// Update user information
const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const userId = Number(req.params.userId);
    const result = await userServices.updateUserInfo(userId, userData);

    // Error Response
    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }

    const responseData = {
      userId: userData.userId,
      username: userData.username,
      fullName: userData.fullName,
      age: userData.age,
      email: userData.email,
      isActive: userData.isActive,
      hobbies: userData.hobbies,
      address: userData.address,
    };

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: responseData,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

// Delete a user
const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.deleteSingleUser(userId);

    // Error Response
    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

// Add New Product in Order
const addNewProduct = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const orderData = req.body;
    const result = await userServices.addNewProduct(userId, orderData);

    // Error Response
    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

// Retrieve all orders for a specific user
const getOrdersForUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getOrdersForUser(userId);

    // Error Response
    if (result === null) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

// Calculate Total Price of Orders for a Specific User
const calculateTotalPriceForUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.calculateTotalPriceForUser(userId);

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }

    const responseData = result[0];

    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: responseData,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

export const userControllers = {
  createNewUser,
  getAllUsers,
  getSingleUser,
  updateUserInfo,
  deleteSingleUser,
  addNewProduct,
  getOrdersForUser,
  calculateTotalPriceForUser,
};
