import type { Game } from '../types/Game';
import { Games } from '../data/games';

export const getGameById = (id: string | null): Game | null => {
  if (!id) {
    return null;
  }

  const game = Games.find((game) => game.id === id);
  return game || null;
};

export const getGameFromPath = (path: string): Game | null => {
  const firstSegment = path.split('/')[0];

  // game is first segment of path
  return getGameById(firstSegment);
};
