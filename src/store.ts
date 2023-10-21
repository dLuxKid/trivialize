import { create } from "zustand";

interface gameState {
  round: number;
  players: {
    [key: string]: number[];
  };
  metrix: {
    point: number;
    bonus: number;
  };
  setRound: (round: number) => void;
  addPlayer: (playerName: string) => void;
  updatePlayerScore: (score: number, playerName: string) => void;
}

export const useGameStore = create<gameState>((set) => ({
  round: 5,
  players: {},
  metrix: { point: 5, bonus: 3 },
  setRound: (round: number) => set((state) => ({ ...state, round: round })),
  addPlayer: (playerName: string) => {
    set((state) => ({
      ...state,
      players: { ...state.players, [playerName]: [] },
    }));
  },
  updatePlayerScore: (score: number, playerName: string) => {
    set((state) => ({
      ...state,
      players: {
        ...state.players,
        [playerName]: [...state.players[playerName], score],
      },
    }));
  },
}));
