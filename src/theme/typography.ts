import { pxToRem } from './utils/formatFontSize'
import { TypographyOptions } from '@mui/material/styles/createTypography'
const FONT_PRIMARY = 'Ubuntu, sans-serif'

// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     aquaV: true
//   }
// }

// export interface ExtendedTypographyOptions extends TypographyOptions {
//   aquaV: React.CSSProperties
// }

const Typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY,

  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: {
    color: 'inherit',
    fontWeight: 700,
    lineHeight: pxToRem(60),
    fontSize: pxToRem(50),
    textTransform: 'uppercase',

    '@media (max-width: 768px)': {
      lineHeight: pxToRem(48),
      fontSize: pxToRem(40),
    },
  },
  h2: {
    color: 'inherit',
    fontWeight: 700,
    lineHeight: pxToRem(45.6),
    fontSize: pxToRem(38),
    textTransform: 'uppercase',

    '@media (max-width: 360px)': {
      fontSize: '2rem',
    },
  },
  h3: {
    color: 'inherit',
    lineHeight: 1.5,
    fontWeight: 700,
    fontSize: pxToRem(24),
  },
  h4: {
    color: 'inherit',
    lineHeight: 1.5,
    fontWeight: 700,
    fontSize: pxToRem(20),
  },
  h5: {
    color: 'inherit',
    lineHeight: 1.5,
    fontWeight: 700,
    fontSize: pxToRem(18),
  },
  h6: {
    // not in use
    color: 'inherit',
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
  },
  subtitle1: {
    color: 'inherit',
    fontWeight: 300,
    opacity: 0.75,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(27),

    '@media (max-width: 768px)': {
      lineHeight: pxToRem(24),
      fontSize: pxToRem(16),
    },
  },
  subtitle2: {
    color: 'inherit',
    fontWeight: 400,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(27),

    '@media (max-width: 768px)': {
      lineHeight: pxToRem(24),
      fontSize: pxToRem(16),
    },
  },
  body1: {
    color: 'inherit',
    fontWeight: 300,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(21),

    '@media (max-width: 768px)': {
      lineHeight: pxToRem(18),
      fontSize: pxToRem(12),
    },
  },
  body2: {
    // not in use
    color: 'inherit',
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: 22 / 14,
  },
  caption: {
    // not in use
    color: 'inherit',
    fontWeight: 300,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(21),
  },
  overline: {
    // not in use
    color: 'inherit',
    fontSize: pxToRem(12),
    lineHeight: 1.5,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  button: {
    // not in use
    color: 'inherit',
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
  // aquaV: {
  //   color: 'aqua',
  //   fontWeight: 700,
  //   lineHeight: 24 / 14,
  //   fontSize: pxToRem(14),
  // },
}

export default Typography
