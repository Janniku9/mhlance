import type { Game } from './Game';

export interface NavItem {
  id: string;
  title: string;
  description?: string;
}

export interface GameNavigation {
  game: Game;
  title: string;
  sections: {
    builds: NavItem[];
    guides: NavItem[];
    tools: NavItem[];
    data: NavItem[];
  };
}

export const games: GameNavigation[] = [
  {
    game: 'world',
    title: 'MH World/Iceborne',
    sections: {
      builds: [
        {
          id: 'low-rank',
          title: 'Low Rank',
          description: 'Low rank progression builds',
        },
        {
          id: 'high-rank',
          title: 'High Rank',
          description: 'High rank progression builds',
        },
        {
          id: 'master-rank',
          title: 'Master Rank',
          description: 'Master rank pr  ogression builds',
        },
        {
          id: 'post-story',
          title: 'Post-Story',
          description: 'Post story & guiding lands builds',
        },
        {
          id: 'endgame',
          title: 'Endgame',
          description: 'Fatalis endgame builds',
        },
      ],
      guides: [
        {
          id: 'combos',
          title: 'Combos',
          description: 'Optimal combos for all situations',
        },
        {
          id: 'guarding',
          title: 'Guard Mechanics',
          description: 'Detailed explanation of guard mechanics',
        },
        {
          id: 'clutch-claw',
          title: 'Clutch Claw',
          description: 'Detailed explanation of clutch claw',
        },
        {
          id: 'mantles',
          title: 'Mantles',
          description: 'Detailed explanation of mantles',
        },
        {
          id: 'palico',
          title: 'Palico',
          description: 'Best palico equipment and skills',
        },
        {
          id: 'food-skills',
          title: 'Food Skills',
          description: 'Best food skills for all situations',
        },
      ],
      tools: [],
      data: [
        {
          id: 'guard-up',
          title: 'Guard Up',
          description: 'Guard up values for all situations',
        },
        {
          id: 'guiding-lands',
          title: 'Guiding Lands',
          description: 'Detailed explanation of guiding lands',
        },
      ],
    },
  },
  {
    game: 'rise',
    title: 'MH Rise/Sunbreak',
    sections: {
      builds: [
        {
          id: 'low-rank',
          title: 'Low Rank',
          description: 'Low rank progression builds',
        },
        {
          id: 'high-rank',
          title: 'High Rank',
          description: 'High rank progression builds',
        },
        {
          id: 'master-rank',
          title: 'Master Rank',
          description: 'Master rank progression builds',
        },
        {
          id: 'post-story',
          title: 'Post-Story',
          description: 'Post story & anomaly progression builds',
        },
        {
          id: 'endgame',
          title: 'Endgame',
          description: 'Endgame meta builds',
        },
      ],
      guides: [
        {
          id: 'combos',
          title: 'Combos',
          description: 'Optimal combos for all situations',
        },
        {
          id: 'switch-skills',
          title: 'Switch Skills',
          description: 'Detailed explanation of switch skills',
        },
        {
          id: 'palamutes',
          title: 'Palamutes',
          description: 'Best palamute equipment and skills',
        },
        {
          id: 'dango',
          title: 'Dango',
          description: 'Best dango combos for all situations',
        },
        {
          id: 'followers',
          title: 'Followers',
          description: 'Best followers combos for solo hunting',
        },
      ],
      tools: [],
      data: [
        {
          id: 'match-ups',
          title: 'Match Ups',
          description: 'Full match up chart for all monsters',
        },
        {
          id: 'guard-up',
          title: 'Guard Up',
          description: 'Recommended guard up values for all monsters',
        },
        {
          id: 'anomaly-materials',
          title: 'Anomaly Materials',
          description: 'Anomaly material drop tables',
        },
        {
          id: 'anti-species',
          title: 'Anti-Species',
          description: 'Anti species decoration match ups',
        },
      ],
    },
  },
];
