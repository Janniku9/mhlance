import type { News } from '../types/News';

import tu6Thumbnail from '../assets/rise/tu6.png';
import iceborneProp from '../assets/world/iprog.png';
import wildsThumbnail from '../assets/wilds/coming_soon.png';
import wildsTu2 from '../assets/wilds/tu2.png';
import wildsAugustBuffs from '../assets/wilds/august_buffs.png';
import wildsTu4 from '../assets/wilds/tu4.png';

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
  {
    href: '/wilds/builds/endgame',
    type: 'builds',
    image: wildsTu2,
    date: '2025-08-03',
    title: 'New Endgame Builds for TU2',
    description: 'Updated endgame builds for Lagiacrus, Seregios and Arch Tempered Uth Duna!',
    game: 'wilds',
  },
  {
    href: '/wilds/guides/combos',
    type: 'builds',
    image: wildsAugustBuffs,
    date: '2025-08-19',
    title: 'Updated Combos & Counters for Balance Patch',
    description: 'Lance Buffs are finally here, Find out what changed',
    game: 'wilds',
  },
  {
    href: '/wilds/builds/endgame',
    type: 'builds',
    image: wildsTu4,
    date: '2025-12-26',
    title: 'Updated Builds & Combos for Tu4',
    description: 'More lance buffs, Gogmazios and AT Jin Dahaad have arrived!',
    game: 'wilds',
  },
];
