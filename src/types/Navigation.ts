import type { Game } from './Game';
import type { Section } from './Sections';

export interface FeaturedLink {
  href: string;
  emoji: string;
  title: string;
  description: string;
}

export interface GameNavigation {
  game: Game;
  title: string;
  emoji: string;
  gameDescription: string;
  playlistId?: string;
  featuredLinks: FeaturedLink[];
  sections: {
    builds: Section[];
    guides: Section[];
    tools: Section[];
    data: Section[];
  };
}
