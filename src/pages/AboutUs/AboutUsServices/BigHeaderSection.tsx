import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  textBlock: {
    marginTop: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  blockForText: {
    maxWidth: theme.spacing(173),
  },
  coloredText: {
    color: theme.palette.primary.main,
  },
}))

const BigHeaderSection = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography variant="h2">Our Mission</Typography>
      <Box className={classes.textBlock}>
        <Box className={classes.blockForText}>
          <Typography variant="h1">
            PROVIDE{' '}
            <span className={classes.coloredText}>
              PREMIER VALUE IT SERVICES
            </span>
            , KEEPING THE FOCUS ON HELPING OUR CUSTOMERS TO REACH THEIR BUSINESS
            GOALS
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default BigHeaderSection
