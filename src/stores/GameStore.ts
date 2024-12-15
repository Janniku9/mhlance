// src/stores/gameStore.js
import { atom } from 'nanostores';
import type { GameType } from '../types/GameType';

export const currentGame = atom<GameType>(null);
