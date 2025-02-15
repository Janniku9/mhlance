export interface Monster {
  name: string;
  image: ImageMetadata;
}

export interface Matchups {
  title: string;
  effectiveAgainst: BuildMatchups[];
}

export interface BuildMatchups {
  buildName: string;
  emoji: string;
  color: string;
  monsters: MonsterPriority[];
}

export interface MonsterPriority {
  name: string;
  buildPriority?: number;
}
