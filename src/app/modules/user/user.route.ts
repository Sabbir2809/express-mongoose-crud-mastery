import express from "express";
import { userControllers } from "./user.controller";
const router = express.Router();

// User Management: API Endpoint
router.post("/", userControllers.createNewUser);
router.get("/", userControllers.getAllUsers);
router.get("/:userId", userControllers.getSingleUser);
router.put("/:userId", userControllers.updateUserInfo);
router.delete("/:userId", userControllers.deleteSingleUser);

// Order Management: API Endpoint
router.put("/:userId/orders", userControllers.addNewProduct);
router.get("/:userId/orders", userControllers.getOrdersForUser);
router.get("/:userId/orders/total-price", userControllers.calculateTotalPriceForUser);

export default router;
