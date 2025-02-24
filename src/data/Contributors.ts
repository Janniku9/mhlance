import type { Contributor } from '../types/Contributors';

import J9 from '../assets/contributors/j9.jpg';

export const contributors: Contributor[] = [
  {
    name: 'J9',
    image: J9,
    contributions: {
      overall: 'design + hosting',
      world: 'progression + guides',
      rise: 'endgame + post story',
    },
    socials: {
      youtube: 'https://www.youtube.com/@J9_MH',
    },
  },
  {
    name: 'Chef',
    contributions: {
      overall: 'progression guides for rise and world',
      world: 'helped with progression guides',
      rise: 'early game progression guide',
    },
    socials: {
      twitch: 'https://www.twitch.tv/ch3f_',
    },
  },
  {
    name: 'Kenny',
    contributions: {
      overall: 'guard up sheets',
      rise: 'tested all attacks for guard up',
    },
    socials: {},
  },
];
