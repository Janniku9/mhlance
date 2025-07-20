import type { Matchups } from '../../types/Monsters';

export const wildsMatchups: Matchups[] = [
  {
    title: 'Wilds Matchups',
    effectiveAgainst: [
      {
        buildName: 'fire',
        emoji: '🔥',
        color: '#dc2626',
        monsters: [
          {
            name: 'blangonga',
          },
          {
            name: 'congalala',
          },
          {
            name: 'doshaguma',
          },
          {
            name: 'gore_magala',
          },
          {
            name: 'gypceros',
          },
          {
            name: 'hirabami',
          },
          {
            name: 'jhin_dahaad',
          },
          {
            name: 'lagiacrus',
          },
          {
            name: 'lala_barina',
          },
        ],
      },
      {
        buildName: 'water',
        emoji: '💧',
        color: '#2563eb',
        monsters: [
          {
            name: 'ajarkan',
          },
          {
            name: 'gravios',
          },
          {
            name: 'guardian_ebony_odogaron',
          },
          {
            name: 'nu_udra',
          },
          {
            name: 'quematrice',
          },
          {
            name: 'rompopolo',
          },
        ],
      },
      {
        buildName: 'thunder',
        emoji: '⚡',
        color: '#f2f540',
        monsters: [
          {
            name: 'balahara',
          },
          {
            name: 'chatacabra',
          },
          {
            name: 'mizutsune',
            buildPriority: 2,
          },
          {
            name: 'nerscylla',
          },
          {
            name: 'seregios',
          },
          {
            name: 'uth_duna',
          },
        ],
      },
      {
        buildName: 'ice',
        emoji: '❄️',
        color: '#06b6d4',
        monsters: [
          {
            name: 'lagiacrus',
          },
          {
            name: 'guardian_fulgur_anjanath',
          },
          {
            name: 'rey_dau',
          },
          {
            name: 'xu_wu',
          },
          {
            name: 'yian_kut_ku',
          },
        ],
      },
      {
        buildName: 'dragon',
        emoji: '🐉',
        color: '#9333ea',
        monsters: [
          {
            name: 'guardian_doshaguma',
          },
          {
            name: 'guardian_rathalos',
          },
          {
            name: 'mizutsune',
            buildPriority: 1,
          },
          {
            name: 'rathalos',
          },
          {
            name: 'rathian',
          },
          {
            name: 'zoh_shia',
          },
        ],
      },
      {
        buildName: 'raw',
        emoji: '💥',
        color: '#958d84ff',
        monsters: [
          { name: 'arkveld' },
          {
            name: 'guardian_arkveld',
          },
        ],
      },
    ],
  },
];
