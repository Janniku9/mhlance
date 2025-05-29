import type { ImageMetadata } from 'astro';
import type { Game } from './Game';

export interface News {
  href: string;
  image: ImageMetadata;
  type: string;
  date: string;
  title: string;
  description: string;
  game: Game;
}
