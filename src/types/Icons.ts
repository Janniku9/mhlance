export const Icons = {
  ghost: 'mingcute:ghost-line',
  close: 'mingcute:close-fill',
  breadcrumbs: 'mingcute:arrows-right-fill',
  arrowRight: 'mingcute:arrow-right-line',
  arrowLeft: 'mingcute:arrow-left-line',
  up: 'mingcute:up-fill',
  down: 'mingcute:down-fill',
} as const;

export type IconName = keyof typeof Icons;
