import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { makeStyles } from '@mui/styles'
import { Typography, List } from '@mui/material'
import Box, { BoxProps } from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { MButton } from '@atoms'
import { useNavigation } from 'hooks'
import { MTheme } from 'theme'
import { InforceLogoDark, InforceLogoLight } from '../assets/icons'

export type THeaderType = 'primary' | 'secondary'

interface IHeader extends BoxProps {
  bgColor: THeaderType
}

const useStyles = makeStyles((theme: MTheme) => ({
  header: {
    width: '100%',
    position: 'absolute',
    zIndex: 1000,
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(3.625, 16),
    transition: 'all 0.25s',
    // responsive
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(3.625, 8.125),
    },

    [theme.breakpoints.down('sm-large')]: {
      padding: theme.spacing(1.8, 4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.8, 1),
    },
  },
  label: {
    width: 'fit-content',
    position: 'relative',
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  navicon: ({ bgColor }: IHeader) => ({
    backgroundColor:
      bgColor === 'secondary'
        ? theme.palette.primary.light
        : theme.palette.text.primary,
    display: 'block',
    height: 4,
    position: 'relative',
    width: 40,
    borderRadius: 3,

    '&::before, &::after': {
      backgroundColor: 'inherit',
      content: '""',
      display: 'block',
      height: '100%',
      position: 'absolute',
      width: '100%',
      borderRadius: 3,
    },

    '&::before': {
      top: 9,
    },
    '&::after': {
      top: -9,
    },
  }),
  list: ({ bgColor }: IHeader) => {
    return {
      '& .MuiList-root': {
        color:
          bgColor === 'secondary'
            ? theme.palette.primary.light
            : theme.palette.text.primary,

        display: 'flex',
        flexDireection: 'row',
        alignItems: 'center',

        '& > a': {
          color: 'inherit',
          textDecoration: 'none',

          '& .MuiTypography-root': {
            marginRight: theme.spacing(4),
            cursor: 'pointer',
            fontWeight: 'inherit',
          },

          [theme.breakpoints.down('md-large')]: {
            width: '100%',
          },
        },

        '& .active': {
          fontWeight: theme.typography.fontWeightBold,
        },

        [theme.breakpoints.down('md-large')]: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          '&  .MuiTypography-root': {
            color: theme.palette.text.primary,
            width: '100%',
            marginRight: 0,
            padding: theme.spacing(1, 2),
          },
          '& > .MuiButton-root': {
            margin: '16px auto',
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    }
  },
}))

const Header = ({ bgColor, className, ...props }: IHeader): JSX.Element => {
  const theme: MTheme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md-large'))
  const { navigate, location } = useNavigation('consultation-form', ['/cookie'])
  const [open, setOpen] = React.useState<boolean>(false)
  const { t } = useTranslation()

  const classes = useStyles({ bgColor })

  const toggleDrawer = (state: boolean) => {
    setOpen(state)
  }

  const list = () => (
    <Box
      sx={{ minWidth: 250 }}
      className={classes.list}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <NavLink
          activeClassName={location.pathname === '/' ? 'active' : ''}
          to="/"
        >
          <Typography variant="subtitle2"> Main</Typography>
        </NavLink>
        <NavLink activeClassName={'active'} to="/services">
          <Typography variant="subtitle2">Services</Typography>
        </NavLink>
        <NavLink activeClassName={'active'} to="/process">
          <Typography variant="subtitle2">Process</Typography>
        </NavLink>
        <NavLink activeClassName={'active'} to="/results">
          <Typography variant="subtitle2">Results</Typography>
        </NavLink>
        <NavLink activeClassName={'active'} to="/about-us">
          <Typography variant="subtitle2">About us</Typography>
        </NavLink>
        <NavLink activeClassName={'active'} to="/cookie">
          <Typography variant="subtitle2">Cookie</Typography>
        </NavLink>
        <MButton color={bgColor} variant="contained" onClick={navigate}>
          {t('button.consultation')}
        </MButton>
      </List>
    </Box>
  )

  return (
    <Box className={clsx(classes.header, className)} {...props}>
      <Link to="/">
        {bgColor === 'secondary' ? <InforceLogoLight /> : <InforceLogoDark />}
      </Link>
      <div>
        <React.Fragment>
          {matches ? (
            <Box className={classes.label} onClick={() => toggleDrawer(true)}>
              <span className={classes.navicon}>&nbsp;</span>
            </Box>
          ) : (
            list()
          )}
          <Drawer
            anchor="right"
            open={open}
            onClose={() => toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      </div>
    </Box>
  )
}

export default React.memo(Header)
