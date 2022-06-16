import { withStyles } from '@mui/styles'
import { MTheme } from './index'
import animations from './animations'

const styles = (theme: MTheme) => ({
  '@global': {
    '*,*::after,*::before': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },
    body: {
      boxSizing: 'border-box',
      fontFamily: 'Ubuntu, sans-serif',
      color: theme.palette.text.primary,
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        width: 8,
        height: 6,
        backgroundColor: theme.palette.primary.light,
      },
      '&::-webkit-scrollbar-thumb, & ::-webkit-scrollbar-thumb': {
        border: 'none',
        borderRadius: 8,
        backgroundColor: theme.palette.grey[400],
      },
    },
    a: {
      textDecoration: 'none',
      color: 'inherit',
    },
    ...animations,
    '::selection': {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.main,
    },
  },
})

function CustomCssBaseLine() {
  return null
}

export default withStyles(styles)(CustomCssBaseLine)
