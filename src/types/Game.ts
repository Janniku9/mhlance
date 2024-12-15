export type GameType = 'world' | 'rise' | 'wilds' | null;

export interface Game {
  id: GameType;
  name: string;
}
