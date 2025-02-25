import type { Contributor } from '../types/Contributors';

import J9 from '../assets/contributors/j9.jpg';

export const contributors: Contributor[] = [
  {
    name: 'J9',
    image: J9,
    contributions: {
      overall: 'Website design, development and hosting',
      world: 'Progression guides and lance mechanics',
      rise: 'Endgame optimization and post-story content',
    },
    socials: {
      youtube: 'https://www.youtube.com/@J9_MH',
    },
  },
  {
    name: 'Chef',
    contributions: {
      overall: 'Comprehensive progression guides for Rise and World',
      world: 'Early and mid-game progression support',
      rise: 'Early game progression guide',
    },
    socials: {
      twitch: 'https://www.twitch.tv/ch3f_',
    },
  },
  {
    name: 'Kenny',
    contributions: {
      overall: 'Guard Up mechanics research',
      rise: 'Tested all monster attacks against Guard Up mechanics',
    },
    socials: {},
  },
  {
    name: 'Noxvenator',
    contributions: {
      overall: 'Guard Up mechanics research',
      world: 'Tested all monster attacks against Guard Up mechanics',
    },
    socials: {},
  },
];
