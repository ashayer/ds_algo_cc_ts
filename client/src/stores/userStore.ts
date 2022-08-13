import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set: any) => ({});

const useUserStore = create(devtools(store));

export default useUserStore;
