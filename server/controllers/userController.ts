import express from "express";
import User from "../models/userModel.js";

interface GameStats {
  points: number;
  gamesPlayed: number;
  numCorrect: number;
  numWrong: number;
  responseTime: number;
  streak: number;
}

export const updateGameStats = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { gameStats }: { gameStats: GameStats } = req.body;

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
    res.status(200).json(algoReading);
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
    res.status(200).json(structureReading);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getUserAlgoReading = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json(user?.algoReading);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getUserStructureReading = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json(user?.structureReading);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getUserStats = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user === null) {
      res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user?.gameStats);
  } catch (error) {
    res.status(400).json(error);
  }
};

function createUserData(gameStats: GameStats, username: string) {
  const { points, gamesPlayed, numCorrect, numWrong, responseTime, streak } = gameStats;
  return {
    points,
    gamesPlayed,
    numCorrect,
    numWrong,
    responseTime,
    streak,
    username,
  };
}

/*
  create an array of objects that combine username and gameStats into one object
  to allow leaderboard sorting
*/
export const getUsersGameStats = async (req: express.Request, res: express.Response) => {
  try {
    const users = await User.find().select("username gameStats -_id");
    const userRows = [];
    for (let i = 0; i < users.length; i += 1) {
      userRows.push(createUserData(users[i]?.gameStats as GameStats, users[i].username));
    }
    res.status(200).json(userRows);
  } catch (error) {
    res.status(400).json(error);
  }
};
