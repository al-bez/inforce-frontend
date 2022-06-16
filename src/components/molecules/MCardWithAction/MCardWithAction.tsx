import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { alpha } from '@mui/material/styles'
import { MTheme } from 'theme'
import { IActionCard } from 'types'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    padding: theme.spacing(4),
    margin: theme.spacing(4.2, 0.01, 8, 0),
    border: '1px solid transparent',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      transform: 'scaleY(1.17)',
      border: `1px solid ${alpha(theme.palette.grey[900], 0.15)}`,
      '&  .MuiTypography-root:first-child': {
        color: theme.palette.primary.main,
      },

      '& > .MuiBox-root': {
        transform: 'scaleY(0.83)',
      },
    },
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    transition: 'all 0.2s ease-in-out',
  },
  header: {
    fontSize: theme.spacing(9.75),
    lineHeight: '117px',
    borderBottom: `1px solid ${alpha(theme.palette.grey[900], 0.15)}`,
    width: '100%',
    marginBottom: theme.spacing(1.5),
    transition: 'all 0.2s ease-in-out',
  },
  action: {
    color: theme.palette.primary.main,
    opacity: 1,
    textDecoration: 'underline',
    cursor: 'pointer',
    marginTop: 'auto',
  },
}))

interface IMCardWithAction {
  card: IActionCard
}

const MCardWithAction = ({ card }: IMCardWithAction) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.contentContainer}>
        <Typography variant="h1" className={classes.header}>
          {card.header}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: (theme) => theme.spacing(5.875) }}
        >
          {card.text}
        </Typography>
        <Typography variant="subtitle1" className={classes.action}>
          <Link to="/about-us">{card.btnText}</Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default MCardWithAction
