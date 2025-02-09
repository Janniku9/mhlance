import type { Game } from './Game';
import type { Section } from './Sections';

export interface GameNavigation {
  game: Game;
  title: string;
  emoji: string;
  sections: {
    builds: Section[];
    guides: Section[];
    tools: Section[];
    data: Section[];
  };
}
