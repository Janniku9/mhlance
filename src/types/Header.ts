export interface HeaderProps {
  height: string;
}

export const BREAKPOINTS = {
  desktop: 'hidden md:block',
  mobile: 'md:hidden',
} as const;

export const LOGO_DIMENSIONS = {
  small: { width: 40, height: 40 },
  large: { width: 120, height: 30 },
} as const;
