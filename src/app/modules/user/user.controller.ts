import { Request, Response } from "express";
import { userServices } from "./user.service";

const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await userServices.createNewUser(userData);

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getSingleUser(userId);

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const userId = Number(req.params.userId);
    const result = await userServices.updateUserInfo(userId, userData);

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    await userServices.deleteSingleUser(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
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
