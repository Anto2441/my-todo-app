import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
  update: (count: number) => void;
};

const useCounterStore = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  update: (count: number) => set(() => ({ count: count })),
}));

// State
export const useCount = () => useCounterStore((state) => state.count);

// Actions
export const useUpdateCount = () => useCounterStore((state) => state.update);

export const useIncrementCount = () =>
  useCounterStore((state) => state.increment);

export const useDecrementCount = () =>
  useCounterStore((state) => state.decrement);
