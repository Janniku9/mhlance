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

const getAugmentColor = (type: AugmentType): string => {
  const colors = {
    attack: 'bg-red-500',
    element: 'bg-orange-500',
    status: 'bg-green-500',
    sharpness: 'bg-cyan-500',
    affinity: 'bg-yellow-500',
    rampage_slot: 'bg-dark-blue-500',
    defense: 'bg-brown-500',
  };
  return colors[type];
};

const getAugmentTooltip = (type: AugmentType): string => {
  const tooltips = {
    attack: 'Attack',
    element: 'Element',
    status: 'Status',
    sharpness: 'Sharpness',
    affinity: 'Affinity',
    rampage_slot: 'Rampage Slot',
    defense: 'Defense',
  };
  return tooltips[type];
};

const getRampageDecoTooltip = (type: RampageDecoType): string => {
  const tooltips = {
    'anti-species': 'Anti-Species',
    elembane: 'Elembane',
    bloodening: 'Bloodening',
    'teostra-soul': 'Teostra Soul',
  };
  return tooltips[type];
};

const getRampageDecoColor = (type: RampageDecoType): string => {
  const colors = {
    'anti-species': 'bg-purple-500',
    elembane: 'bg-blue-500',
    bloodening: 'bg-red-500',
    'teostra-soul': 'bg-red-500',
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
  getScrollImage,
};
