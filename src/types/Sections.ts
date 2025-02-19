export type SectionType = 'builds' | 'guides' | 'tools' | 'data';

export interface Section {
  id: string;
  title: string;
  emoji: string;
  showInQuickLinks?: boolean;
  navDescription?: string;
  pageDescription?: string;
  externalLink?: string;
}
