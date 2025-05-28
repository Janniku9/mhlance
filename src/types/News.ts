import type { Game } from './Game';

export interface News {
  href: string;
  type: string;
  date: string;
  title: string;
  description: string;
  game: Game;
}
