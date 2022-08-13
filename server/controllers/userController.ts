import express from "express";
import User from "../models/userModel.js";

export const updateGameStats = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { gameStats } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, {
      gameStats,
    });
    res.status(200).json(gameStats);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateAlgoReading = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { algoReading } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, {
      algoReading,
    });
    res.status(200).json(user?.algoReading);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateStructureReading = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { structureReading } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, {
      structureReading,
    });
    res.status(200).json(user?.structureReading);
  } catch (error) {
    res.status(400).json(error);
  }
};
