import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
};

const createCounterStore = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// State
export const useCount = () => createCounterStore((state) => state.count);

// Actions
export const useIncrementCount = () =>
  createCounterStore((state) => state.increment);

export const useDecrementCount = () =>
  createCounterStore((state) => state.decrement);
