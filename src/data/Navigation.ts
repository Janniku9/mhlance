import type { GameNavigation } from '../types/Navigation';

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
          navDescription: 'Low rank progression builds',
        },
        {
          id: 'high-rank',
          title: 'High Rank',
          emoji: '💠',
          navDescription: 'High rank progression builds',
        },
        {
          id: 'master-rank',
          title: 'Master Rank',
          emoji: '❄️',
          navDescription: 'Master rank progression builds',
        },
        {
          id: 'post-story',
          title: 'Post-Story',
          emoji: '🐲',
          navDescription: 'Post story & guiding lands builds',
        },
        {
          id: 'endgame',
          title: 'Endgame',
          emoji: '🐉',
          navDescription: 'Fatalis endgame builds',
        },
      ],
      guides: [
        {
          id: 'combos',
          title: 'Combos',
          emoji: '🥊',
          navDescription: 'Optimal combos for all situations',
        },
        {
          id: 'guarding',
          title: 'Guard Mechanics',
          emoji: '🛡️',
          navDescription: 'Detailed explanation of guard mechanics',
        },
        {
          id: 'clutch-claw',
          title: 'Clutch Claw',
          emoji: '⚓',
          navDescription: 'Detailed explanation of clutch claw',
        },
        {
          id: 'mantles',
          title: 'Mantles',
          emoji: '🧥',
          navDescription: 'Detailed explanation of mantles',
        },
        {
          id: 'palico',
          title: 'Palico',
          emoji: '🐈',
          navDescription: 'Best palico equipment and skills',
        },
        {
          id: 'food-skills',
          title: 'Food Skills',
          emoji: '🥩',
          navDescription: 'Best food skills for all situations',
        },
      ],
      tools: [],
      data: [
        {
          id: 'guard-up',
          title: 'Guard Up',
          emoji: '🛡️',
          navDescription: 'Guard up values for all situations',
        },
        {
          id: 'guiding-lands',
          title: 'Guiding Lands',
          emoji: '🏞️',
          navDescription: 'Detailed explanation of guiding lands',
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
          navDescription: 'Low rank progression builds',
          pageDescription:
            'Easy-to-follow builds for crushing the early game! Get geared up fast as you progress through Low Rank',
        },
        {
          id: 'high-rank',
          title: 'High Rank',
          emoji: '🌄',
          navDescription: 'High rank progression builds',
        },
        {
          id: 'master-rank',
          title: 'Master Rank',
          emoji: '🏰',
          navDescription: 'Master rank progression builds',
        },
        {
          id: 'post-story',
          title: 'Post-Story',
          emoji: '🩸',
          navDescription: 'Post story & anomaly progression builds',
        },
        {
          id: 'endgame',
          title: 'Endgame',
          emoji: '👑',
          navDescription: 'Endgame meta builds',
        },
      ],
      guides: [
        {
          id: 'combos',
          title: 'Combos',
          emoji: '🥊',
          navDescription: 'Optimal combos for all situations',
          pageDescription:
            'Your bread & butter Lance combos for big damage! Everything you need to know about dishing out maximum DPS',
        },
        {
          id: 'switch-skills',
          title: 'Switch Skills',
          emoji: '🔄',
          navDescription: 'Detailed explanation of switch skills',
        },
        {
          id: 'palamutes',
          title: 'Palamutes',
          emoji: '🐕‍',
          navDescription: 'Best palamute equipment and skills',
        },
        {
          id: 'dango',
          title: 'Dango',
          emoji: '🍡',
          navDescription: 'Best dango combos for all situations',
        },
        {
          id: 'followers',
          title: 'Followers',
          emoji: '📯‍',
          navDescription: 'Best followers combos for solo hunting',
        },
      ],
      tools: [],
      data: [
        {
          id: 'match-ups',
          title: 'Match Ups',
          emoji: '📝',
          navDescription: 'Full match up chart for all monsters',
        },
        {
          id: 'guard-up',
          title: 'Guard Up',
          emoji: '🛡️',
          navDescription: 'Recommended guard up values for all monsters',
        },
        {
          id: 'anomaly-materials',
          title: 'Anomaly Materials',
          emoji: '🦴',
          navDescription: 'Anomaly material drop tables',
        },
        {
          id: 'anti-species',
          title: 'Anti-Species',
          emoji: '🧬',
          navDescription: 'Anti species decoration match ups',
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
