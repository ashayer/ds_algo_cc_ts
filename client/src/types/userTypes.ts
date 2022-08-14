declare global {
  interface GameStats {
    points: number;
    gamesPlayed: number;
    numCorrect: number;
    numWrong: number;
    responseTime: number;
    streak: number;
  }
  interface SortHistoryElement {
    value: number;
    color: string;
  }

  interface SortLabelHistoryElement {
    index: number;
    label: string;
  }
}

export {};
