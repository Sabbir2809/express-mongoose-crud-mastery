import express from "express";
import { userControllers } from "./user.controller";
const router = express.Router();

router.post("/", userControllers.createNewUser);
router.get("/", userControllers.getAllUsers);
router.get("/:userId", userControllers.getSingleUser);
router.put("/:userId", userControllers.updateUserInfo);
router.delete("/:userId", userControllers.deleteSingleUser);
router.put("/:userId/orders", userControllers.addNewProduct);

export default router;
