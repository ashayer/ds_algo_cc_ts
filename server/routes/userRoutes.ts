import express from "express";
import {
  updateGameStats,
  updateAlgoReading,
  updateStructureReading,
  getUsersGameStats,
  getUserStats,
  getUserAlgoReading,
  getUserStructureReading,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.patch("/updateGameStats/:id", updateGameStats);
userRouter.patch("/updateAlgoReading/:id", updateAlgoReading);
userRouter.patch("/updateStructureReading/:id", updateStructureReading);
userRouter.get("/getUsersGameStats", getUsersGameStats);
userRouter.get("/getUserStats/:id", getUserStats);
userRouter.get("/getAlgoReading/:id", getUserAlgoReading);
userRouter.get("/getStructureReading/:id", getUserStructureReading);

export default userRouter;
