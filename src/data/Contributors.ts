import type { Contributor } from '../types/Contributors';

import J9 from '../assets/contributors/j9.jpg';

export const contributors: Contributor[] = [
  {
    name: 'J9',
    image: J9,
    contributions: {
      world: 'progression guides and lance mechanics',
      rise: 'endgame optimization and post-story content',
      wilds: 'endgame builds and guides',
    },
    socials: {
      youtube: 'https://www.youtube.com/@J9_MH',
      discord: 'https://discordapp.com/users/180715438634827777',
    },
  },
  {
    name: 'Chef',
    contributions: {
      world: 'base and mid-game progression guide',
      rise: 'base and mid-game progression guide',
    },
    socials: {
      twitch: 'https://www.twitch.tv/ch3f_',
    },
  },
  {
    name: 'Kenny',
    contributions: {
      rise: 'guard up testing and data collection',
    },
    socials: {},
  },
  {
    name: 'Noxvenator',
    contributions: {
      world: 'guard up testing and data collection',
    },
    socials: {},
  },
  {
    name: 'Dot Execute',
    contributions: {
      wilds: 'damage calculator and MV sheet',
    },
    socials: {
      youtube: 'https://www.youtube.com/channel/UCCVlgaeVKSj6zpUrVGgEjhg',
    },
  },
  {
    name: 'Gnar',
    contributions: {
      wilds: 'guard up testing and data collection',
    },
    socials: {
      youtube: 'https://www.youtube.com/@gnaryamanobe',
    },
  },
];
