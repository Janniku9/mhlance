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

export const games: GameNavigation[] = [
  {
    game: 'world',
    title: 'World/Iceborne',
    emoji: '🧊',
    sections: {
      builds: [
        {
          id: 'low-rank',
          title: 'Low Rank',
          emoji: '🌋',
          description: 'Low rank progression builds',
        },
        {
          id: 'high-rank',
          title: 'High Rank',
          emoji: '💠',
          description: 'High rank progression builds',
        },
        {
          id: 'master-rank',
          title: 'Master Rank',
          emoji: '❄️',
          description: 'Master rank pr  ogression builds',
        },
        {
          id: 'post-story',
          title: 'Post-Story',
          emoji: '🐲',
          description: 'Post story & guiding lands builds',
        },
        {
          id: 'endgame',
          title: 'Endgame',
          emoji: '🐉',
          description: 'Fatalis endgame builds',
        },
      ],
      guides: [
        {
          id: 'combos',
          title: 'Combos',
          emoji: '🥊',
          description: 'Optimal combos for all situations',
        },
        {
          id: 'guarding',
          title: 'Guard Mechanics',
          emoji: '🛡️',
          description: 'Detailed explanation of guard mechanics',
        },
        {
          id: 'clutch-claw',
          title: 'Clutch Claw',
          emoji: '⚓',
          description: 'Detailed explanation of clutch claw',
        },
        {
          id: 'mantles',
          title: 'Mantles',
          emoji: '🧥',
          description: 'Detailed explanation of mantles',
        },
        {
          id: 'palico',
          title: 'Palico',
          emoji: '🐈',
          description: 'Best palico equipment and skills',
        },
        {
          id: 'food-skills',
          title: 'Food Skills',
          emoji: '🥩',
          description: 'Best food skills for all situations',
        },
      ],
      tools: [],
      data: [
        {
          id: 'guard-up',
          title: 'Guard Up',
          emoji: '🛡️',
          description: 'Guard up values for all situations',
        },
        {
          id: 'guiding-lands',
          title: 'Guiding Lands',
          emoji: '🏞️',
          description: 'Detailed explanation of guiding lands',
        },
      ],
    },
  },
  {
    game: 'rise',
    title: 'Rise/Sunbreak',
    emoji: '🌅',
    sections: {
      builds: [
        {
          id: 'low-rank',
          title: 'Low Rank',
          emoji: '🏯',
          description: 'Low rank progression builds',
        },
        {
          id: 'high-rank',
          title: 'High Rank',
          emoji: '🌄',
          description: 'High rank progression builds',
        },
        {
          id: 'master-rank',
          title: 'Master Rank',
          emoji: '🏰',
          description: 'Master rank progression builds',
        },
        {
          id: 'post-story',
          title: 'Post-Story',
          emoji: '🩸',
          description: 'Post story & anomaly progression builds',
        },
        {
          id: 'endgame',
          title: 'Endgame',
          emoji: '👑',
          description: 'Endgame meta builds',
        },
      ],
      guides: [
        {
          id: 'combos',
          title: 'Combos',
          emoji: '🥊',
          description: 'Optimal combos for all situations',
        },
        {
          id: 'switch-skills',
          title: 'Switch Skills',
          emoji: '🔄',
          description: 'Detailed explanation of switch skills',
        },
        {
          id: 'palamutes',
          title: 'Palamutes',
          emoji: '🐕‍',
          description: 'Best palamute equipment and skills',
        },
        {
          id: 'dango',
          title: 'Dango',
          emoji: '🍡',
          description: 'Best dango combos for all situations',
        },
        {
          id: 'followers',
          title: 'Followers',
          emoji: '📯‍',
          description: 'Best followers combos for solo hunting',
        },
      ],
      tools: [],
      data: [
        {
          id: 'match-ups',
          title: 'Match Ups',
          emoji: '📝',
          description: 'Full match up chart for all monsters',
        },
        {
          id: 'guard-up',
          title: 'Guard Up',
          emoji: '🛡️',
          description: 'Recommended guard up values for all monsters',
        },
        {
          id: 'anomaly-materials',
          title: 'Anomaly Materials',
          emoji: '🦴',
          description: 'Anomaly material drop tables',
        },
        {
          id: 'anti-species',
          title: 'Anti-Species',
          emoji: '🧬',
          description: 'Anti species decoration match ups',
        },
      ],
    },
  },
  {
    game: 'wilds',
    title: 'Wilds',
    emoji: '🌿',
    sections: {
      builds: [],
      guides: [],
      tools: [],
      data: [],
    },
  },
];
