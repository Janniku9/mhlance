import type { Game } from './Game';

export interface Contributor {
  name: string;
  image?: ImageMetadata;
  contributions: {
    [key in Exclude<Game, null> | 'overall']?: string;
  };
  socials: {
    youtube?: string;
    twitch?: string;
    twitter?: string;
    discord?: string;
  };
}
