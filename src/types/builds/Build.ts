export type ElementType = 'fire' | 'water' | 'thunder' | 'ice' | 'dragon';

export type StatusType = 'poison' | 'sleep' | 'paralysis' | 'blast';

export type SharpnessType = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'white' | 'purple';

export type AugmentType =
  | 'attack'
  | 'element'
  | 'status'
  | 'sharpness'
  | 'affinity'
  | 'rampage_slot'
  | 'defense';

export type ScrollType = 'red' | 'blue';

export type RampageDecoType = 'anti-species' | 'elembane' | 'bloodening' | 'teostra-soul';

export interface Build {
  title: string;
  description: string[];
  image: ImageMetadata;
  imageAlt?: string;
  stats: {
    raw: number;
    element?: {
      value: number;
      type: ElementType;
    };
    status?: {
      value: number;
      type: StatusType;
    };
    sharpness: {
      hits: number;
      type: SharpnessType;
    };
    affinity: {
      avg: number;
      peak: number;
    };
  };
  augments?: AugmentType[];
  scroll?: ScrollType;
  rampageDeco?: RampageDecoType;
  additionalNotes?: Record<string, string>;
}
