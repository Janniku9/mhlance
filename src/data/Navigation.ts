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
          pageDescription: 'Start your lance journey with these efficient early builds! ',
        },
        {
          id: 'high-rank',
          title: 'High Rank',
          emoji: '💠',
          navDescription: 'High rank progression builds',
          pageDescription: 'Optimized lance builds for High Rank progression! ',
        },
        {
          id: 'master-rank',
          title: 'Master Rank',
          emoji: '❄️',
          navDescription: 'Master rank progression builds',
          pageDescription:
            "Tackle Iceborne's challenges with powerful Master Rank progression builds.",
        },
        {
          id: 'post-story',
          title: 'Post-Story',
          emoji: '🐲',
          navDescription: 'Post story & guiding lands builds',
          pageDescription: 'Optimized builds for the post story and guiding lands!',
        },
        {
          id: 'endgame',
          title: 'Endgame',
          emoji: '👑',
          showInQuickLinks: true,
          navDescription: 'Fatalis endgame builds',
          pageDescription: 'Harness the true power of Fatalis with these ultimate lance builds.',
        },
      ],
      guides: [
        {
          id: 'combos',
          title: 'Combos',
          emoji: '🥊',
          showInQuickLinks: true,
          navDescription: 'Optimal combos for all situations',
          pageDescription:
            "Master lance's key combos and attack patterns for maximum damage in every situation!",
        },
        {
          id: 'guarding',
          title: 'Guard Mechanics',
          emoji: '🛡️',
          showInQuickLinks: true,
          navDescription: 'Detailed explanation of guard mechanics',
          pageDescription: 'Everything you need to know about guard levels.',
        },
        {
          id: 'clutch-claw',
          title: 'Clutch Claw',
          emoji: '⚓',
          showInQuickLinks: true,
          navDescription: 'Detailed explanation of clutch claw',
          pageDescription: 'Learn to integrate clutch claw attacks into your lance gameplay!',
        },
        {
          id: 'mantles',
          title: 'Mantles',
          emoji: '🧥',
          navDescription: 'Detailed explanation of mantles',
          pageDescription:
            'Discover the best mantles for lance and how to utilize them effectively! ',
        },
        {
          id: 'palico',
          title: 'Palico',
          emoji: '🐈',
          navDescription: 'Best palico equipment and skills',
          pageDescription: 'Optimize your hunting companion with the best gadgets and equipment! ',
        },
        {
          id: 'food-skills',
          title: 'Food Skills',
          emoji: '🥩',
          navDescription: 'Best food skills for all situations',
          pageDescription: 'Fuel your hunts with the most beneficial food skills.',
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
          pageDescription:
            'Complete reference of all attacks requiring Guard Up and truly unblockables.',
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
          pageDescription:
            "Conquer Sunbreak's toughest monsters with these powerful progression builds! ",
        },
        {
          id: 'post-story',
          title: 'Post-Story',
          emoji: '🩸',
          navDescription: 'Post story & anomaly progression builds',
          pageDescription:
            'Dominate Anomaly Investigations with specialized builds for efficient farming!',
        },
        {
          id: 'endgame',
          title: 'Endgame',
          emoji: '👑',
          showInQuickLinks: true,
          navDescription: 'Endgame meta builds',
          pageDescription: 'Best lance builds for every playstyle! ',
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
          pageDescription: 'Master the new Switch Skills system!',
          showInQuickLinks: true,
        },
        {
          id: 'palamutes',
          title: 'Palamutes',
          emoji: '🐕‍',
          showInQuickLinks: true,
          navDescription: 'Best palamute equipment and skills',
          pageDescription: 'Turn your dogs into dps machines!',
        },
        {
          id: 'dango',
          title: 'Dango',
          emoji: '🍡',
          navDescription: 'Best dango combos for all situations',
          pageDescription: 'Power up with the perfect meal!',
        },

        {
          id: 'followers',
          title: 'Followers',
          emoji: '📯‍',
          navDescription: 'Best followers combos for solo hunting',
          pageDescription: 'Hunt faster with NPC followers!',
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
          pageDescription: 'Quick reference guide for all anomaly materials!',
        },
        {
          id: 'anti-species',
          title: 'Anti-Species',
          emoji: '🧬',
          navDescription: 'Anti species decoration match ups',
          pageDescription: 'Maximize your damage with the right anti-species decoration.',
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
