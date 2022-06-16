import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { MTheme } from 'theme'
import { Typography } from '@mui/material'
import { PImage } from '@molecules'
import { IImage } from 'types/project'

const useStyles = makeStyles((theme: MTheme) => ({
  containerBox: {
    maxWidth: theme.spacing(67.375),
    maxHeight: theme.spacing(67.375),
    [theme.breakpoints.down('md-large')]: {
      maxWidth: '100%',
    },
  },
  imgBtnBlock: {
    [theme.breakpoints.down('md-large')]: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.down('sm-large')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down('xs-medium')]: {
      flexDirection: 'column',
    },
  },
  imgWrapper: {
    width: 150,
    height: 98,
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm-large')]: {
      width: 105,
      height: 69,
    },
  },

  image: {
    width: '100%',
  },
  buttonBox: {
    paddingTop: theme.spacing(4),
  },
}))

interface IIconWithAction {
  header: string
  logo: IImage
  children: React.ReactNode // buttons
}

// shows header, image and in our case buttons passed as children
const IconWithAction = ({ header, logo, children }: IIconWithAction) => {
  const classes = useStyles()

  return (
    <Box className={classes.containerBox}>
      <Box>
        <Typography variant="subtitle1" mb={2}>
          {header}
        </Typography>
      </Box>
      <Box className={classes.imgBtnBlock}>
        <Box className={classes.imgWrapper}>
          <PImage
            src={logo.src}
            placeholder={logo.src_pixel}
            className={classes.image}
          />
        </Box>
        <Box className={classes.buttonBox}>{children}</Box>
      </Box>
    </Box>
  )
}

export default IconWithAction
