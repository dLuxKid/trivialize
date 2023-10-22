import { create } from "zustand";

interface gameState {
  numberOfRounds: number;
  numberOfPlayers: number;
  players: {
    [key: string]: number[];
  };
  scoreMetrix: {
    correctPoint: number;
    bonusPoint: number;
  };
  setNumberOfRounds: (round: number) => void;
  setNumberOfPlayers: (length: number) => void;
  addPlayer: (playerName: string) => void;
  updatePlayerScore: (score: number, playerName: string) => void;
  setBonusScoreMetrix: (bonus: number) => void;
  setCorrectScoreMetrix: (point: number) => void;
}

export const useGameStore = create<gameState>((set) => ({
  numberOfRounds: 5,
  numberOfPlayers: 2,
  players: {},
  scoreMetrix: { correctPoint: 5, bonusPoint: 3 },
  setNumberOfRounds: (round: number) =>
    set((state) => ({ ...state, numberOfRounds: round })),
  setNumberOfPlayers: (no: number) =>
    set((state) => ({ ...state, numberOfPlayers: no, players: {} })),
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
  setBonusScoreMetrix: (bonus: number) => {
    set((state) => ({
      ...state,
      scoreMetrix: {
        ...state.scoreMetrix,
        bonusPoint: bonus,
      },
    }));
  },
  setCorrectScoreMetrix: (point: number) => {
    set((state) => ({
      ...state,
      scoreMetrix: {
        ...state.scoreMetrix,
        correctPoint: point,
      },
    }));
  },
}));
