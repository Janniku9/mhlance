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
          emoji: '👑',
          showInQuickLinks: true,
          navDescription: 'Fatalis endgame builds',
        },
      ],
      guides: [
        {
          id: 'combos',
          title: 'Combos',
          emoji: '🥊',
          showInQuickLinks: true,
          navDescription: 'Optimal combos for all situations',
        },
        {
          id: 'guarding',
          title: 'Guard Mechanics',
          emoji: '🛡️',
          showInQuickLinks: true,
          navDescription: 'Detailed explanation of guard mechanics',
        },
        {
          id: 'clutch-claw',
          title: 'Clutch Claw',
          emoji: '⚓',
          showInQuickLinks: true,
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
          showInQuickLinks: true,
          navDescription: 'Guard up values for all situations',
        },
        /*
        {
          id: 'guiding-lands',
          title: 'Guiding Lands',
          emoji: '🏞️',
          navDescription: 'Detailed explanation of guiding lands',
        },
        */
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
          showInQuickLinks: true,
          navDescription: 'Low rank progression builds',
          pageDescription:
            'Easy-to-follow builds for crushing the early game! Get geared up fast as you progress through Low Rank',
        },
        {
          id: 'high-rank',
          title: 'High Rank',
          emoji: '🌄',
          navDescription: 'High rank progression builds',
          pageDescription:
            'Power through High Rank with optimized lance builds! From starter gear to endgame sets.',
        },
        {
          id: 'master-rank',
          title: 'Master Rank',
          emoji: '🏰',
          showInQuickLinks: true,
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
          showInQuickLinks: true,
          navDescription: 'Endgame meta builds',
        },
      ],
      guides: [
        {
          id: 'combos',
          title: 'Combos',
          emoji: '🥊',
          navDescription: 'Optimal combos for all situations',
          showInQuickLinks: true,
          pageDescription:
            'Your bread & butter Lance combos for big damage! Everything you need to know about dishing out maximum DPS',
        },
        {
          id: 'switch-skills',
          title: 'Switch Skills',
          emoji: '🔄',
          navDescription: 'Detailed explanation of switch skills',
          showInQuickLinks: true,
        },
        {
          id: 'palamutes',
          title: 'Palamutes',
          emoji: '🐕‍',
          showInQuickLinks: true,
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
          showInQuickLinks: true,
          navDescription: 'Optimal builds for every monster matchup',
          pageDescription: 'Complete matchup guide showing the best builds for every monster! ',
        },
        {
          id: 'guard-up',
          title: 'Guard Up',
          emoji: '🛡️',
          showInQuickLinks: true,
          navDescription: 'All blockable & unblockable attacks',
          pageDescription:
            'Complete list of attacks requiring Guard Up and truly unblockable moves! ',
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
        {
          id: 'monster-data',
          title: 'Monster Database',
          emoji: '👾',
          navDescription: 'HP, Hitzone, weaknesses, and more!',
          externalLink: 'https://robomeche.github.io/MHRise-Database/',
        },
        {
          id: 'motion-values',
          title: 'Motion Values',
          emoji: '🔍',
          navDescription: 'Motion values for all weapons',
          externalLink:
            'https://docs.google.com/spreadsheets/d/1KSH0Uf-DsbFixdldQvcH-5zFXpX303dIzThTYMVH33Q/edit?gid=1642215220#gid=1642215220',
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
