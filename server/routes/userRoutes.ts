import express from "express";
import {
  updateGameStats,
  updateAlgoReading,
  updateStructureReading,
} from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.post("/updateGameStats/:id", updateGameStats);
authRouter.post("/updateAlgoReading/:id", updateAlgoReading);
authRouter.post("/updateStructureReading/:id", updateStructureReading);
export default authRouter;
