export const brand = Object.freeze({
  name: 'AG / Adrian Guichard',
  concept: 'Arc / Cut / Signal',

  color: {
    dark: {
      canvas: '#06080D',
      surface: '#0B0F17',
      surfaceRaised: '#111824',
      ink: '#F5F3ED',
      muted: '#98A1AE',
      hairline: '#263140',
      gold: '#D9AE57',
      goldBright: '#F2D58A',
      goldDeep: '#8A631F',
      electric: '#168CFF',
      electricBright: '#65C7FF',
      electricDeep: '#0657B8',
    },
    light: {
      canvas: '#F4F1E8',
      surface: '#FBF9F3',
      surfaceRaised: '#FFFFFF',
      ink: '#0B0E14',
      muted: '#586170',
      hairline: '#CDD2D8',
      gold: '#9A6C17',
      goldBright: '#B9821E',
      goldDeep: '#6A480C',
      electric: '#006BDD',
      electricBright: '#168CFF',
      electricDeep: '#004B9A',
    },
  },

  responsive: {
    viewport: {
      desktop: 1200,
      compact: 900,
      mobile: 720,
    },
    breakpoint: {
      mobileMax: 430,
      compactMax: 1240,
    },
  },

  geometry: {
    grid: 8,
    safeX: 72,
    safeY: 64,
    cornerRadius: {
      desktop: 28,
      compact: 30,
      mobile: 32,
    },
    hairline: 1,
    rule: 2,
    markStroke: 11,
    signalStroke: 3,
    cutAngleDeg: 14,
  },

  type: {
    display: 'Inter, Segoe UI, Arial, sans-serif',
    body: 'Inter, Segoe UI, Arial, sans-serif',
    mono: 'SFMono-Regular, Consolas, Liberation Mono, monospace',
    trackingLabel: 3.2,
    minimumSvgText: {
      desktop: 14,
      compact: 20,
      mobile: 22,
    },
  },

  motion: {
    railSeconds: 8,
    signalPrimarySeconds: 7.2,
    signalSecondarySeconds: 9.6,
    reducedMotion: 'native prefers-reduced-motion fallback',
  },

  rules: {
    gold: 'structure, name, authored signature',
    electric: 'motion, signal, active state, links',
    neutral: 'content and hierarchy',
    glow: 'never required; use only as a restrained secondary effect',
  },
});
