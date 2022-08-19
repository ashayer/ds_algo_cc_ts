import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set: any) => ({
  gameStats: {} as GameStats,
  setGameStats: (gameStats: GameStats) => set({ gameStats }),
  sessionGameStats: {
    points: 0,
    numCorrect: 0,
    numWrong: 0,
    responseTime: 0,
    streak: 0,
  } as SessionGameStats,
  setSessionGameStats: (sessionGameStats: SessionGameStats) => set({ sessionGameStats }),
  gameHasStarted: false,
  setGameHasStarted: (gameHasStarted: boolean) => set({ gameHasStarted }),
});

const useUserStore = create(devtools(store));

export default useUserStore;
