import create, {State} from "zustand";
import { devtools } from "zustand/middleware";
import { create as mutativeCreate, Draft } from 'mutative';

export interface DragonhelmStore {
  Dragonhelms: number;
  increaseDragonhelms: () => void;
  decreaseDragonhelms: () => void;
  removeAllDragonhelms: () => void;
}

export const mutative = (config) =>
(set, get) => config((fn) => set(mutativeCreate(fn)), get);

type StoreSet = (fn: (draft: Draft<DragonhelmStore>) => void) => void;

const store = (set: StoreSet) => ({
  Dragonhelms: 0,
  increaseDragonhelms: () => {
    set((state) => {
      state.Dragonhelms++;
    });
  },
  decreaseDragonhelms: () => {
    set((state) => {
      if(state.Dragonhelms > 0) {
        state.Dragonhelms--;
      }
    });
  },
  removeAllDragonhelms: () => {
    set((state) => {
      state.Dragonhelms = 0;
    });
  },
});
export const useDragonhelmStore = create<DragonhelmStore>()(devtools(mutative(store)));
