import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  textBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down('md-large')]: {
      flexDirection: 'column',
    },
  },
  numbersBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  smallText: {
    maxWidth: theme.spacing(85),
    marginRight: theme.spacing(20.625),

    [theme.breakpoints.down('lg-medium')]: {
      marginRight: 0,
    },
    [theme.breakpoints.down('lg')]: {
      marginRight: theme.spacing(9),
      maxWidth: theme.spacing(62.75),
    },
    [theme.breakpoints.down(1200)]: {
      maxWidth: theme.spacing(44.75),
    },
    [theme.breakpoints.down('md-large')]: {
      maxWidth: '100%',
      marginRight: 0,
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('sm-large')]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down(450)]: {
      gap: '8px',
    },
  },
  numbersContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down(450)]: {
      maxWidth: '31.5%',
    },
  },
  redNumbers: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(8),
    lineHeight: theme.spacing(9.6),
    fontWeight: 700,

    [theme.breakpoints.down(450)]: {
      fontSize: theme.spacing(5),
      lineHeight: '69px',
    },
  },
}))

const MarketSuccess = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <Box paddingBottom={4}>
        <Typography variant="h2">MARKET SUCCESS</Typography>
      </Box>
      <Box className={classes.textBlock}>
        <Box className={classes.smallText}>
          <Typography variant="subtitle1">{t('about.market')}</Typography>
        </Box>
        <Box className={classes.numbersBlock}>
          <Box className={classes.numbersContainer}>
            <Box className={classes.redNumbers}>120+</Box>
            <Typography variant="subtitle1">Projects</Typography>
          </Box>
          <Box className={classes.numbersContainer}>
            <Box className={classes.redNumbers}>60+</Box>
            <Typography variant="subtitle1">Clients</Typography>
          </Box>
          <Box className={classes.numbersContainer}>
            <Box className={classes.redNumbers}>5</Box>
            <Typography variant="subtitle1">Years of experience</Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default MarketSuccess
