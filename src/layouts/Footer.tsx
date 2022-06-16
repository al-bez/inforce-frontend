import { memo } from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
// assets
import {
  InforceLogoDark,
  LinkedInIcon,
  InstagramIcon,
  СlutchIcon,
} from '../assets/icons'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    background: theme.palette.primary.main,
    padding: theme.spacing(3.625, 16),
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
    width: 555,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: theme.palette.primary.light,
    marginBottom: theme.spacing(3.625),

    '& > a > svg': {
      marginBottom: theme.spacing(3.625),
      '& path:not(:nth-of-type(3n))': {
        fill: theme.palette.primary.light,
      },
    },
    '& > .MuiBox-root': {
      marginTop: theme.spacing(3.625),
    },

    [theme.breakpoints.down('sm-large')]: {
      marginBottom: theme.spacing(2),

      '& > a > svg': {
        marginBottom: theme.spacing(2),
      },
    },
  },
  social: {
    display: 'flex',
    alignItems: 'center',

    '& > a': {
      cursor: 'pointer',
      '&:not(:last-child)': {
        marginRight: theme.spacing(2),
      },
    },

    [theme.breakpoints.down('sm-large')]: {
      marginBottom: theme.spacing(2),
    },
  },
  navigationBlock: {
    width: 'fit-content',
    color: theme.palette.primary.light,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridAutoFlow: 'column',
    gridRowGap: theme.spacing(3.625),
    gridColumnGap: theme.spacing(5),

    [theme.breakpoints.down('sm-large')]: {
      gridRowGap: theme.spacing(2),
      gridColumnGap: theme.spacing(2),
    },
    '& > .MuiTypography-root': {
      cursor: 'pointer',

      '& > a': {
        color: 'inherit',
        textDecoration: 'none',
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
          <Typography variant="subtitle1">{t('general.email')}</Typography>
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
            href="https://instagram.com/inforce_ua?igshid=YmMyMTA2M2Y="
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </a>
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
        </Box>
        <Typography
          color="primary.light"
          variant="subtitle1"
          sx={{ textAlign: 'center' }}
        >
          {t('footer.copyright')}
        </Typography>
      </Box>
    </Box>
  )
}

export default memo(Footer)
