export enum ComboTag {
  DamageRaw = 'Raw Focused',
  DamageElemental = 'Elemental Focused',
  DamageHybrid = 'Hybrid Damage',
  DamagePeak = 'Peak Damage',

  EfficiencySharpness = 'Sharpness Efficient',

  OpportunityShort = 'Short Window',
  OpportunityLong = 'Long Down',

  ExecutionSimple = 'Easy to Execute',
  ExecutionComplex = 'Complex Execution',

  Reposition = 'Good for Repositioning',
}

export type PlaystationKey =
  | 'Triangle'
  | 'Circle'
  | 'Cross'
  | 'Square'
  | 'L1'
  | 'L2'
  | 'L'
  | 'R1'
  | 'R2'
  | 'R'
  | 'DpadUp'
  | 'DpadDown'
  | 'DpadLeft'
  | 'DpadRight'
  | 'Share'
  | 'Options'
  | 'LBack';

export type XboxKey =
  | 'Y'
  | 'B'
  | 'A'
  | 'X'
  | 'LB'
  | 'LT'
  | 'LS'
  | 'RB'
  | 'RT'
  | 'RS'
  | 'DpadUp'
  | 'DpadDown'
  | 'DpadLeft'
  | 'DpadRight'
  | 'View'
  | 'Menu'
  | 'LSBack';
export type PCKey =
  | 'W'
  | 'A'
  | 'S'
  | 'D'
  | 'WASD'
  | 'Space'
  | 'Shift'
  | 'Ctrl'
  | 'MouseLeft'
  | 'MouseRight'
  | 'MouseMiddle'
  | 'MouseButton4'
  | 'MouseButton5';

export type ControllerKey = PlaystationKey | XboxKey | PCKey;

export type Platform = 'playstation' | 'xbox' | 'pc';

export interface ComboInput {
  notes?: string;
  PCInput: PCKey[][];
  PlaystationInput: PlaystationKey[][];
  XboxInput: XboxKey[][];
}

export interface Combo {
  title: string;
  longTitle: string;
  stats: {
    motionValue: number;
    elementModifier: number;
    sharpnessCost: number;
    duration: number;
  };
  tags: ComboTag[];
  gif: string;
  strengths: string[];
  considerations: string[];
  inputs?: ComboInput;
}
