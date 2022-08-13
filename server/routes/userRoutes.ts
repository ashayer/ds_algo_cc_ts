import express from "express";
import {
  updateGameStats,
  updateAlgoReading,
  updateStructureReading,
} from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.patch("/updateGameStats/:id", updateGameStats);
authRouter.patch("/updateAlgoReading/:id", updateAlgoReading);
authRouter.patch("/updateStructureReading/:id", updateStructureReading);
export default authRouter;
