/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { userServices } from "./user.service";

const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const newUser = await userServices.createNewUser(userData);

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

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      data: responseData,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getSingleUser(userId);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const userId = Number(req.params.userId);
    const result = await userServices.updateUserInfo(userId, userData);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.deleteSingleUser(userId);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const userControllers = {
  createNewUser,
  getAllUsers,
  getSingleUser,
  updateUserInfo,
  deleteSingleUser,
};
