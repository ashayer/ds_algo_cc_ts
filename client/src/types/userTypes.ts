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

  interface ArrayBarsProps {
    sortHistoryArray: SortHistoryElement[][];
    step: number;
    varLabelArray: SortLabelHistoryElement[][];
    arrayMax: number;
  }

  interface StepLabelsProps {
    varLabelArray: SortLabelHistoryElement[];
    idx: number;
  }
  interface SubArrayBarsProps {
    sortHistorySubArray: SortHistoryElement[][];
    step: number;
    varLabelSubArray: SortLabelHistoryElement[][];
    arrayMax: number;
  }

  interface StepLabelsSubProps {
    varLabelSubArray: SortLabelHistoryElement[];
    idx: number;
  }
}

export {};
