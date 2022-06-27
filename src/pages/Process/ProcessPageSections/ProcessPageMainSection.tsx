import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Box } from '@mui/material'
import { GhostHeaderBox, TextBlockWithHeader } from '@molecules'
import { MTheme } from 'theme'
import {
  DrawingIcon,
  LeftSideLinesIcon,
  RightSideLinesIcon,
} from '../../../assets/icons'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: `repeat(12, 1fr)`,
    gridTemplateRows: `repeat(2, 0.75fr)`,
    justifyContent: 'space-between',
    paddingTop: theme.spacing(12),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
      display: 'block',
    },
  },
  leftIcon: {
    gridColumn: '1 / span 2',
    gridRow: '1 / span 2',
    [theme.breakpoints.down('lg')]: {
      position: 'absolute',
      left: -52,
    },
    [theme.breakpoints.down('md-large')]: {
      display: 'none',
    },
  },
  infoBlock: {
    '& .MuiTypography-subtitle1': {
      fontSize: theme.spacing(3),
      lineHeight: theme.spacing(6),
    },
    gridColumn: '1 / span 4',
    gridRow: '1 / span 2',
    paddingLeft: theme.spacing(16),
    [theme.breakpoints.down('lg')]: {
      gridColumn: '1 / span 5',
      paddingLeft: theme.spacing(8),
    },
    [theme.breakpoints.down('md-large')]: {
      gridColumn: '1 / span 6',
    },
    [theme.breakpoints.down('sm-large')]: {
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 1),
    },
  },
  rightBlock: {
    position: 'absolute',
    right: 0,
    gridColumn: '6 / span 12',
    gridRow: ' 1 / span 2',
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('xl')]: {
      position: 'unset',
      right: 'unset',
    },
    [theme.breakpoints.down('lg')]: {
      gridColumn: '6 / span 12',
    },
    [theme.breakpoints.down('md-large')]: {
      gridColumn: '7 / span 12',
      paddingLeft: theme.spacing(0),
    },
  },
  drawingIcon: {
    position: 'absolute',
    paddingLeft: theme.spacing(22),
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing(16),
    },
    [theme.breakpoints.down('md-large')]: {
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.down('sm-large')]: {
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(8),
    },
  },
}))

const ProcessPageMainSection = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <GhostHeaderBox />
      <Box className={classes.root}>
        <Grid className={classes.leftIcon}>
          <LeftSideLinesIcon />
        </Grid>
        <Grid className={classes.infoBlock}>
          <Box>
            <Box paddingBottom={1}>
              <TextBlockWithHeader subHeader="Inforce" header="Our Process">
                We take the time to understand your vision, help define and
                design your product, and then build it through our collaborative
                and fully transparent app and software development process.
              </TextBlockWithHeader>
            </Box>
          </Box>
        </Grid>
        <Box className={classes.rightBlock}>
          <Box className={classes.drawingIcon}>
            <DrawingIcon />
          </Box>
          <RightSideLinesIcon />
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default ProcessPageMainSection
