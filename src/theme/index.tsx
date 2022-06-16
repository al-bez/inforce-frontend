import React from 'react'
import { createTheme, ThemeProvider, Breakpoints } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/styled-engine'
import CustomCssBaseLine from './CustomCssBaseLine'
import borderRadius, { ShapeOptions } from './borderRadius'
import breakpoints from './breakpoints'
import typography from './typography'
import {
  Typography,
  TypographyOptions,
} from '@mui/material/styles/createTypography'
import { Direction, Transitions } from '@mui/material'
import { Mixins } from '@mui/material/styles/createMixins'
import { Spacing } from '@mui/system'
import { Components } from '@mui/material/styles/components'
import palette, { PaletteOptions, PaletteOptionsIndexed } from './palette'
import shadows from './shadows'
import { Shadows } from '@mui/material/styles/shadows'
import { ZIndex } from '@mui/material/styles/zIndex'
import '../assets/fonts/index.css'

export interface MTheme {
  shape: ShapeOptions
  breakpoints: Breakpoints
  direction: Direction
  mixins: Mixins
  components?: Components
  palette: PaletteOptions & PaletteOptionsIndexed
  shadows: Shadows
  spacing: Spacing
  transitions: Transitions
  typography: Typography
  zIndex: ZIndex
  unstable_strictMode?: boolean
}

export interface MThemeOptions {
  palette: PaletteOptions
  typography: TypographyOptions
  shape: ShapeOptions
  breakpoints: Partial<Breakpoints>
  components: Components
  spacing: Spacing
  transitions: Transitions
  shadows: Shadows
}

export interface ThemeConfigProps {
  children: React.ReactNode
}

export function ThemeConfig({ children }: ThemeConfigProps) {
  const themeOptions: Partial<MThemeOptions> = {
    palette,
    typography,
    shape: borderRadius,
    shadows,
    breakpoints,
  }
  const theme = createTheme(themeOptions)

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CustomCssBaseLine />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>
  )
}
