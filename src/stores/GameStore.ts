import { atom } from 'nanostores';
import type { GameType } from '../types/Game';

export const currentGameId = atom<GameType>(null);

export const gameStore = {
  setGame: (id: GameType) => currentGameId.set(id),
  clearGame: () => currentGameId.set(null),
};
