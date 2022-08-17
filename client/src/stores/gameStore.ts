import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set: any) => ({
  questionInfo: {} as GameQuestionInfo,
  setQuestionInfo: (gameInfo: GameQuestionInfo) => set({ gameInfo }),

  questionDisplay: {} as any,
  setQuestionDisplay: (questionDisplay: any) => set({ questionDisplay }),
});

const useGameStore = create(devtools(store));

export default useGameStore;
