declare global {
  interface GameStats {
    points: number;
    gamesPlayed: number;
    numCorrect: number;
    numWrong: number;
    responseTime: number;
    streak: number;
  }
}

export {};
