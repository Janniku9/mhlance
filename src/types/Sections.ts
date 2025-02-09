export type SectionType = 'builds' | 'guides' | 'tools' | 'data';

export interface Section {
  id: string;
  title: string;
  emoji: string;
  navDescription?: string;
  pageDescription?: string;
}
