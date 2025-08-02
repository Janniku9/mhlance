import type { GuardUp } from '../../types/Monsters';

export const worldGuardUp: GuardUp[] = [
  {
    name: 'alatreon',
    guardUp: [
      'fire/ice cone spray when on ground',
      'fire/ice spray when in the air',
      'flamethrower sweep when grounded',
    ],
    trueUnblockable: [
      "escation judgement can't be blocked, you need to pass the elemental check to be able to survive it",
    ],
  },
  {
    name: 'ancient leshen',
    guardUp: ['pin attack'],
    trueUnblockable: [
      "super aoe move where the camera zooms out can't be blocked, just sheathe and flash it",
    ],
  },
  {
    name: 'anjanath',
    guardUp: ['pin attack'],
  },
  {
    name: 'azure rathalos',
    guardUp: ['pin attack'],
  },
  {
    name: 'behemoth',
    guardUp: ['all lightning attacks', 'fire pillars', 'belly flop'],
    trueUnblockable: [
      "ecliptic meteor can't be blocked, you need to hide behind a comet to survive it",
      "gore quick bite where he grabs you afterwards can't be blocked",
    ],
  },
  {
    name: 'black diablos',
    guardUp: ['small roar into rush attack'],
  },
  {
    name: 'blackveil vaal hazak',
    guardUp: ['all 3 miasma laser attacks', 'miasma downwards spray'],
  },
  {
    name: 'deviljho',
    guardUp: ['pin attack'],
  },
  {
    name: 'fatalis',
    guardUp: [
      'all fireball attacks',
      'side to side spray',
      '360 fire spray',
      'fire spray from above',
    ],
    trueUnblockable: [
      "the pin attack in third phase can't be blocked",
      "phase transitions can't be blocked, need to hide to survive them",
    ],
  },
  {
    name: 'frostfang barioth',
    trueUnblockable: [
      "all attacks that leave ice on the ground can't be blocked",
      "can't walk through the ice",
    ],
  },
  {
    name: 'furious rajang',
    guardUp: ['beam attack', 'wall beam'],
  },
  {
    name: 'kirin',
    guardUp: ['attack where multiple lightning lines form on the ground'],
  },
  {
    name: 'kulve taroth',
    guardUp: ['fire spray hits'],
  },
  {
    name: 'kushala daora',
    guardUp: ['charged wind blast when on the ground'],
  },
  {
    name: 'leshen',
    guardUp: ['pin attack'],
    trueUnblockable: [
      "super aoe move where the camera zooms out can't be blocked, just sheathe and flash it",
    ],
  },
  {
    name: 'lunastra',
    guardUp: ['all attacks that detonate the fire on the ground'],
    trueUnblockable: [
      'you can only block the wind pressure of the nova with guard up, you will still take damage over time',
    ],
  },
  {
    name: 'namielle',
    guardUp: ['wave attack, but does a lot of chip'],
    trueUnblockable: ["the pull that trips the hunter can't be blocked"],
  },
  {
    name: 'radobaan',
    guardUp: ['the sleep gas'],
  },
  {
    name: 'raging brachydios',
    guardUp: ['the move in last phase where he explodes all slime on the ground'],
  },
  {
    name: 'rajang',
    guardUp: ['beam attack'],
  },
  {
    name: 'rathalos',
    guardUp: ['pin attack'],
  },
  {
    name: 'safi jiiva',
    guardUp: ['all lasers'],
    trueUnblockable: ['the nova, just hide behind the rocks'],
  },
  {
    name: 'savage deviljho',
    guardUp: ['dragon element explosion attack'],
    trueUnblockable: [
      "pin attack can't be blocked",
      "attack where he sprays down dragon element can't be blocked",
    ],
  },
  {
    name: 'seething bazelgeuse',
    guardUp: ['special nuke attack'],
  },
  {
    name: 'shara ishvalda',
    guardUp: ['all wind laser attacks, the big beam will most likely chip you to death'],
    trueUnblockable: [
      "The big energy ball move can't be blocked, just run to the side of the arena",
    ],
  },
  {
    name: 'silver rathalos',
    guardUp: ['pin attack'],
  },
  {
    name: 'stygian zinogre',
    guardUp: ['pin attack'],
  },
  {
    name: 'teostra',
    guardUp: ['super nova', 'flame shower'],
  },
  {
    name: 'uragaan',
    guardUp: ['all gas attacks'],
  },
  {
    name: 'vaal hazak',
    guardUp: ['miasma laser', 'miasma downwards spray'],
  },
  {
    name: 'velkhana',
    guardUp: ['all 4 ice beams'],
    trueUnblockable: [
      "the freeze breath that leaves a circle on the ground can't be blocked",
      "the AT velkhana's 360 nova beam can't be blocked",
    ],
  },
  {
    name: 'xeno jiiva',
    guardUp: ['all energy beams', 'all ground explosion'],
  },
  {
    name: 'zinogre',
    trueUnblockable: ['pin attack is true unblockable'],
  },
];
