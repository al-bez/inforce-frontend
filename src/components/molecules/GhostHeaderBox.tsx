import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { MTheme } from 'theme'

// 74px here cuz the actual height of the inforce logo is 74px in the <Header /> component
const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    height: `calc(${theme.spacing(3.625)} + 74px)`,
    // responsive
    [theme.breakpoints.down('sm-large')]: {
      height: `calc(${theme.spacing(1.8)} + 74px)`,
    },
  },
}))

const GhostHeaderBox = () => {
  const classes = useStyles()
  return <Box className={classes.root}>&nbsp;</Box>
}

export default GhostHeaderBox
