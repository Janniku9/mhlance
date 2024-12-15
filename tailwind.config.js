/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        spacing: {
          104: '26rem',
          128: '32rem',
          144: '36rem',
          160: '40rem',
          176: '44rem',
          192: '48rem',
        },
        colors: {
          primary: {
            lighter: '#FFF9C4',
            light: '#FFF176',
            DEFAULT: '#FFEB3B',
            dark: '#FBC02D',
            darker: '#F57F17',
          },
          secondary: {
            lighter: '#FFE0B2',
            light: '#FFB74D',
            DEFAULT: '#FF9800',
            dark: '#F57C00',
            darker: '#E65100',
          },
          success: {
            lighter: '#DCEDC8',
            light: '#AED581',
            DEFAULT: '#8BC34A',
            dark: '#689F38',
            darker: '#33691E',
          },
          warning: {
            lighter: '#F8BBD0',
            light: '#F06292',
            DEFAULT: '#E91E63',
            dark: '#C2185B',
            darker: '#880E4F',
          },
          info: {
            lighter: '#B3E5FC',
            light: '#4FC3F7',
            DEFAULT: '#03A9F4',
            dark: '#0288D1',
            darker: '#01579B',
          },
          error: {
            lighter: '#FFCDD2',
            light: '#E57373',
            DEFAULT: '#F44336',
            dark: '#D32F2F',
            darker: '#B71C1C',
          },
          text: {
            DEFAULT: '#f0f0f0',
            light: '#f0f0f0',
            dark: '#0f0f0f',
          },
          background: {
            tag: '#3a2f36',
            DEFAULT: '#1e181c',
            paper: '#020102',
          },
        },
        fontFamily: {
          mono: ['Geist Mono', 'monospace'],
        },
      },
    },
    plugins: [],
  };
  