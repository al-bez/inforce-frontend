import { makeStyles } from '@mui/styles'
import { Box, Typography, Button } from '@mui/material'
import { MTheme } from 'theme'

// FIX_TS

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
  alertConrainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '&  .MuiButton-root': {
      padding: theme.spacing(1, 4),
    },
  },
}))

interface IErrorFallback {
  error: Error
  resetErrorBoundary: () => void
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: IErrorFallback): JSX.Element {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box role="alert" className={classes.alertConrainer}>
        <Typography variant="h2">Something went wrong:</Typography>
        <Typography variant="subtitle2">{error.message}</Typography>
        <Button
          color="secondary"
          variant="contained"
          onClick={resetErrorBoundary}
        >
          Try again
        </Button>
      </Box>
    </Box>
  )
}
