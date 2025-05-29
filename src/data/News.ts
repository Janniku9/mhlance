import type { News } from '../types/News';

import tu6Thumbnail from '../assets/rise/tu6.png';
import iceborneProp from '../assets/world/iprog.png';
import wildsThumbnail from '../assets/wilds/coming_soon.png';

export const news: News[] = [
  {
    href: '/rise/builds/endgame',
    type: 'builds',
    image: tu6Thumbnail,
    date: '2023-05-31',
    title: 'New TU6 Endgame Builds',
    description: 'Check out the new TU6 endgame builds for Rise/Sunbreak!',
    game: 'rise',
  },
  {
    href: '/world/builds/low-rank',
    type: 'builds',
    image: iceborneProp,
    date: '2024-03-06',
    title: 'Complete World/Iceborne Progression Guide',
    description: 'A complete guide to low rank progression in World and Iceborne.',
    game: 'world',
  },
  {
    href: '/wilds',
    type: 'guides',
    image: wildsThumbnail,
    date: '2025-03-01',
    title: 'New Builds and Guides for Wilds',
    description: 'A little more patience needed :)',
    game: 'wilds',
  },
];
