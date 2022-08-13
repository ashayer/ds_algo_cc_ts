import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set: any) => ({
  gameStats: {} as GameStats,
  setGameStats: (gameStats: GameStats) => set({ gameStats }),
});

const useUserStore = create(store);

export default useUserStore;
