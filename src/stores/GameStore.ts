import { atom } from 'nanostores';
import type { GameType } from '../types/Game';

export const currentGameId = atom<GameType>(null);
