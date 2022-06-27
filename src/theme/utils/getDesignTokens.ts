import { PaletteMode } from '@mui/material'
import Palette, { DarkModePalette } from 'theme/palette'

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode == 'light'
      ? {
          DarkModePalette,
        }
      : {
          Palette,
        }),
  },
})
