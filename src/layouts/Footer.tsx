import { memo } from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
// assets
import { InforceLogoDark, LinkedInIcon, СlutchIcon } from '../assets/icons'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    background: theme.palette.primary.main,
    padding: theme.spacing(1.8, 16),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',

    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(3.625, 8.125),
      flexWrap: 'wrap',
    },

    [theme.breakpoints.down('sm-large')]: {
      padding: theme.spacing(1.8, 4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.8, 1),
      flexDirection: 'column',
    },
  },
  section: {
    width: '600px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },

    [theme.breakpoints.down('sm-large')]: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },

  logoBlock: {
    margin: '0 10px 5px 0',
    color: theme.palette.primary.light,
    '& > a > svg': {
      '& path:not(:nth-of-type(3n))': {
        fill: theme.palette.primary.light,
      },
    },
    '& > .MuiBox-root': {
      marginTop: theme.spacing(3.625),
    },

    [theme.breakpoints.down('sm-large')]: {
      margin: 'auto',
      '& > a > svg': {
        marginBottom: theme.spacing(2),
      },
    },
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.light,

    '& > a': {
      cursor: 'pointer',
      '&:not(:last-child)': {
        marginRight: theme.spacing(2),
      },
    },

    [theme.breakpoints.down('sm-large')]: {
      margin: 'auto',
    },
  },
  navigationBlock: {
    width: '100%',
    color: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'space-around',
    '& > .MuiTypography-root': {
      cursor: 'pointer',

      '& > a': {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    [theme.breakpoints.down('sm-large')]: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gridTemplateColumns: '1fr 1fr',
      // flexDirection: 'column',

      // alignItems: 'center',
      '& h6': {
        margin: '0 0 5px 0',
        textAlign: 'center',
      },
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>
        <Box className={classes.logoBlock}>
          <Link to="/">
            <InforceLogoDark />
          </Link>
        </Box>
        <Box className={classes.navigationBlock}>
          <Typography variant="subtitle2">
            <Link to="/">Main</Link>
          </Typography>
          <Typography variant="subtitle2">
            <Link to="/services">Services</Link>
          </Typography>
          <Typography variant="subtitle2">
            <Link to="/process">Process</Link>
          </Typography>
          <Typography variant="subtitle2">
            <Link to="/results">Results</Link>
          </Typography>
          <Typography variant="subtitle2">
            <Link to="/about-us">About us</Link>
          </Typography>
          <Typography variant="subtitle2">
            <Link to="/cookie">Cookie</Link>
          </Typography>
        </Box>
      </Box>
      {/* -------------------------------section 2 below */}
      <Box className={classes.section}>
        <Box className={classes.social}>
          <a
            href="https://www.linkedin.com/company/inforce-digital/mycompany/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://clutch.co/profile/inforce#summary"
            rel="noreferrer"
            target="_blank"
          >
            <СlutchIcon />
          </a>
          <Typography variant="subtitle1">
            <a href="mailto:info@inforce.digital">{t('general.email')}</a>
          </Typography>
        </Box>
      </Box>
      <Typography
        style={{ margin: 'auto' }}
        color="primary.light"
        variant="subtitle1"
        sx={{ textAlign: 'center' }}
      >
        {t('footer.copyright')}
      </Typography>
    </Box>
  )
}

export default memo(Footer)
