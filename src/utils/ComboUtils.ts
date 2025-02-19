import {
  ComboTag,
  type ControllerKey,
  type PCKey,
  type Platform,
  type PlaystationKey,
  type XboxKey,
} from '../types/guides/Combo';

export const PLAYSTATION_BUTTON_MAP: Record<PlaystationKey, string> = {
  Triangle: '△',
  Circle: '○',
  Cross: '×',
  Square: '□',
  L1: 'L1',
  L2: 'L2',
  L: 'L',
  R1: 'R1',
  R2: 'R2',
  R: 'R',
  DpadUp: '⯅',
  DpadDown: '⯆',
  DpadLeft: '⯇',
  DpadRight: '⯈',
  Share: '⠿',
  Options: '⠿',
  LBack: 'L⯆',
};

export const XBOX_BUTTON_MAP: Record<XboxKey, string> = {
  Y: 'Y',
  B: 'B',
  A: 'A',
  X: 'X',
  LB: 'LB',
  LT: 'LT',
  LS: 'LS',
  RB: 'RB',
  RT: 'RT',
  RS: 'RS',
  DpadUp: '⯅',
  DpadDown: '⯆',
  DpadLeft: '⯇',
  DpadRight: '⯈',
  View: '⠿',
  Menu: '⠿',
  LSBack: 'LS⯆',
};

const PC_BUTTON_MAP: Record<PCKey, string> = {
  W: 'W',
  A: 'A',
  S: 'S',
  D: 'D',
  WASD: 'WASD',
  Space: '␣',
  Shift: '⇧',
  Ctrl: '⌃',
  MouseLeft: '🖱️L',
  MouseRight: '🖱️R',
  MouseMiddle: '🖱️M',
  MouseButton4: '🖱️4',
  MouseButton5: '🖱️5',
};

const PLAYSTATION_COLOR_MAP: Partial<Record<PlaystationKey, string>> = {
  Triangle: 'bg-green-500/20 border-green-500/30 text-green-400',
  Circle: 'bg-red-500/20 border-red-500/30 text-red-400',
  Cross: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
  Square: 'bg-pink-500/20 border-pink-500/30 text-pink-400',
};

const XBOX_COLOR_MAP: Partial<Record<XboxKey, string>> = {
  Y: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
  B: 'bg-red-500/20 border-red-500/30 text-red-400',
  A: 'bg-green-500/20 border-green-500/30 text-green-400',
  X: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
};

const PC_COLOR_MAP: Partial<Record<PCKey, string>> = {
  MouseLeft: 'bg-primary/20 border-primary/30 text-primary',
  MouseRight: 'bg-secondary/20 border-secondary/30 text-secondary',
};

export function getButtonEmoji(button: ControllerKey, platform: Platform): string {
  if (platform === 'playstation' && button in PLAYSTATION_BUTTON_MAP) {
    return PLAYSTATION_BUTTON_MAP[button as PlaystationKey];
  }
  if (platform === 'xbox' && button in XBOX_BUTTON_MAP) {
    return XBOX_BUTTON_MAP[button as XboxKey];
  }
  if (platform === 'pc' && button in PC_BUTTON_MAP) {
    return PC_BUTTON_MAP[button as PCKey];
  }
  return button.toString();
}

export function getButtonClass(button: ControllerKey, platform: Platform): string {
  const baseClass = 'w-10 h-10 flex items-center justify-center border text-sm font-medium';

  // Default to round buttons
  let shapeClass = 'rounded-full';

  // Define which buttons should be rectangular
  const rectangularButtons = {
    playstation: ['L1', 'L2', 'R1', 'R2', 'Share', 'Options'], // Removed L3/R3
    xbox: ['LB', 'LT', 'RB', 'RT', 'View', 'Menu'], // Removed LS/RS
    pc: ['Space', 'Shift', 'Ctrl', 'W', 'A', 'S', 'D', 'WASD'], // Keep keyboard keys rectangular
  };

  // Check if button should be rectangular
  if (platform === 'playstation' && rectangularButtons.playstation.includes(button as string)) {
    shapeClass = 'rounded-lg';
  }
  if (platform === 'xbox' && rectangularButtons.xbox.includes(button as string)) {
    shapeClass = 'rounded-lg';
  }
  if (platform === 'pc' && rectangularButtons.pc.includes(button as string)) {
    shapeClass = 'rounded-lg';
  }

  let colorClass = 'bg-gray-500/20 border-gray-500/30 text-gray-400';

  if (platform === 'playstation' && button in PLAYSTATION_COLOR_MAP) {
    colorClass = PLAYSTATION_COLOR_MAP[button as PlaystationKey] || colorClass;
  }
  if (platform === 'xbox' && button in XBOX_COLOR_MAP) {
    colorClass = XBOX_COLOR_MAP[button as XboxKey] || colorClass;
  }
  if (platform === 'pc' && button in PC_COLOR_MAP) {
    colorClass = PC_COLOR_MAP[button as PCKey] || colorClass;
  }

  return `${baseClass} ${shapeClass} ${colorClass}`;
}

export function getComboTagColor(tag: ComboTag): string {
  switch (tag) {
    case ComboTag.DamageRaw:
      // error color
      return 'bg-error/20 border-error/30 text-error-light';
    case ComboTag.DamageElemental:
      // info color
      return 'bg-info/20 border-info/30 text-info-light';
    case ComboTag.DamageHybrid:
      // warning color
      return 'bg-warning/20 border-warning/30 text-warning-light';
    case ComboTag.DamagePeak:
      // success color
      return 'bg-success/20 border-success/30 text-success-light';
    case ComboTag.EfficiencySharpness:
      // primary color
      return 'bg-primary/20 border-primary/30 text-primary-light';
    case ComboTag.OpportunityShort:
      // info light color
      return 'bg-success-light/20 border-success-light/30 text-success-lighter';
    case ComboTag.OpportunityLong:
      // info light color
      return 'bg-info-light/20 border-info-light/30 text-info-lighter';
    case ComboTag.ExecutionSimple:
      // success light color
      return 'bg-success-light/20 border-success-light/30 text-success-lighter';
    case ComboTag.ExecutionComplex:
      // error light color
      return 'bg-error-light/20 border-error-light/30 text-error-lighter';
    default:
      return '';
  }
}
