import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  quotsSection: {
    marginTop: theme.spacing(10),
    maxWidth: 597,
    padding: theme.spacing(6),
    margin: 'auto',
    position: 'relative',
    textAlign: 'center',

    '& .MuiTypography-root': {
      opacity: 1,
      lineHeight: theme.spacing(5.25),
      fontSize: theme.spacing(3.5),
    },
  },
  speechmarks: {
    fontSize: theme.spacing(19.125),
    color: theme.palette.text.primary,
    opacity: 0.05,
  },
  left: {
    position: 'absolute',
    top: -14,
    left: -14,
    [theme.breakpoints.down('sm-large')]: {
      left: 0,
    },
  },
  right: {
    position: 'absolute',
    bottom: -94,
    right: 42,
    [theme.breakpoints.down('sm-large')]: {
      right: 0,
    },
  },
}))

const QuoteSection = () => {
  const classes = useStyles()
  return (
    <Box className={classes.quotsSection}>
      <Box className={clsx(classes.speechmarks, classes.left)}>“</Box>
      <Box>
        <Typography variant="subtitle1" align="center">
          <span> We craft websites and applications </span>
          <span>that connect you with your communities.</span>
        </Typography>
      </Box>
      <Box className={clsx(classes.speechmarks, classes.right)}>“</Box>
    </Box>
  )
}
export default QuoteSection
