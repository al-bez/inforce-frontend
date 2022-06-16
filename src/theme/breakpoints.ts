import { Breakpoints } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    'xs-medium': true
    'sm-large': true
    'md-large': true
    'lg-medium': true
  }
}

const VALUES = {
  xs: 0,
  'xs-medium': 360,
  sm: 600,
  'sm-large': 768,
  md: 900,
  'md-large': 1000,
  lg: 1366,
  'lg-medium': 1600,
  xl: 1920,
}

const breakpoints: Partial<Breakpoints> = {
  values: VALUES,
}

export default breakpoints
