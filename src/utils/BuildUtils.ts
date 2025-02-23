import type {
  AugmentType,
  ElementType,
  RampageDecoType,
  ScrollType,
  SharpnessType,
  StatusType,
} from '../types/builds/Build';

import redScroll from '../assets/builds/red.png';
import blueScroll from '../assets/builds/blue.png';
import type { Game } from '../types/Game';

const getElementEmoji = (type: ElementType): string => {
  const icons = {
    fire: '🔥',
    water: '💧',
    thunder: '⚡',
    ice: '❄️',
    dragon: '🐉',
  };
  return icons[type];
};

const getStatusEmoji = (type: StatusType): string => {
  const icons = {
    poison: '💀',
    sleep: '💤',
    paralysis: '⚡⚡',
    blast: '💣',
  };
  return icons[type];
};

const getSharpnessColor = (type: SharpnessType): string => {
  const colors = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-400',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    white: 'bg-slate-200',
    purple: 'bg-purple-500',
  };
  return colors[type];
};

const getAugmentColor = (type: AugmentType, game: Game = 'rise'): string => {
  const riseColors = {
    attack: 'bg-red-500',
    element: 'bg-orange-500',
    status: 'bg-green-500',
    sharpness: 'bg-cyan-500',
    affinity: 'bg-yellow-500',
    'rampage-slot': 'bg-blue-500',
    // don't exist in rise
    health: 'bg-gray-500',
    defense: 'bg-gray-500',
  };

  const worldColors = {
    attack: 'bg-red-500',
    element: 'bg-yellow-500',
    status: 'bg-yellow-500',
    defense: 'bg-orange-500',
    affinity: 'bg-purple-500',
    health: 'bg-green-500',
    // don't exist in world
    sharpness: 'bg-gray-500',
    'rampage-slot': 'bg-gray-500',
  };

  const colors = game === 'rise' ? riseColors : worldColors;

  return colors[type as keyof typeof colors];
};

const getAugmentTooltip = (type: AugmentType): string => {
  const tooltips = {
    attack: 'attack',
    element: 'element',
    status: 'status',
    sharpness: 'sharpness',
    health: 'health',
    affinity: 'affinity',
    'rampage-slot': 'rampage slot upgrade',
    defense: 'defense',
  };
  return tooltips[type];
};

const getRampageDecoTooltip = (type: RampageDecoType): string => {
  const tooltips = {
    'anti-species': 'anti species',
    elembane: 'elembane',
    bloodening: 'bloodening',
    'teostra-soul': 'teostra soul',
  };
  return tooltips[type];
};

const getRampageDecoColor = (type: RampageDecoType): string => {
  const colors = {
    'anti-species': 'bg-purple-500/70',
    elembane: 'bg-blue-500/70',
    bloodening: 'bg-red-500/70',
    'teostra-soul': 'bg-red-500/70',
  };
  return colors[type];
};

const getScrollImage = (type: ScrollType): ImageMetadata => {
  if (type === 'red') {
    return redScroll;
  } else {
    return blueScroll;
  }
};

export {
  getElementEmoji,
  getStatusEmoji,
  getSharpnessColor,
  getAugmentColor,
  getAugmentTooltip,
  getRampageDecoTooltip,
  getRampageDecoColor,
  getScrollImage,
};
