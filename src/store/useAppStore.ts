import { create } from 'zustand';

interface AppState {
  isLoading: boolean;
  user: User | null;
  setLoading: (loading: boolean) => void;
  setUser: (user: User | null) => void;
  reset: () => void;
}

interface User {
  id: string;
  email: string;
  name: string;
}

const initialState = {
  isLoading: false,
  user: null,
};

export const useAppStore = create<AppState>(set => ({
  ...initialState,
  setLoading: loading => set({ isLoading: loading }),
  setUser: user => set({ user }),
  reset: () => set(initialState),
}));
