import { makeStyles } from '@mui/styles'
import { MTheme } from 'theme'

export const useStyles = makeStyles((theme: MTheme) => ({
  block: {
    display: 'flex',
    justifyContent: 'space-between',

    '&:nth-child(2)': {
      flexDirection: 'row-reverse',
    },

    '&:not(:last-child)': {
      marginBottom: theme.spacing(12),
      [theme.breakpoints.down('lg')]: {
        marginBottom: theme.spacing(8),
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(6),
      },
    },
    [theme.breakpoints.down('md-large')]: {
      display: 'block',
    },
  },
  textContainer: {
    [theme.breakpoints.down('md-large')]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
}))
