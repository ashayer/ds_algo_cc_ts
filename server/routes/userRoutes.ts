import express from "express";
import {
  updateGameStats,
  updateAlgoReading,
  updateStructureReading,
  getUsersGameStats,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.patch("/updateGameStats/:id", updateGameStats);
userRouter.patch("/updateAlgoReading/:id", updateAlgoReading);
userRouter.patch("/updateStructureReading/:id", updateStructureReading);
userRouter.get("/getUsersGameStats", getUsersGameStats);
export default userRouter;
