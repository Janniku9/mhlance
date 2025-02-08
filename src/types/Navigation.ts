import type { Game } from './Game';

export interface NavItem {
  id: string;
  title: string;
  emoji: string;
  description?: string;
}

export interface GameNavigation {
  game: Game;
  title: string;
  emoji: string;
  sections: {
    builds: NavItem[];
    guides: NavItem[];
    tools: NavItem[];
    data: NavItem[];
  };
}
