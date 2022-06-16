import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import { background } from '../../assets/base64'
import { makeStyles } from '@mui/styles'
import { MTheme } from 'theme'

interface IFull {
  full: boolean
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: ({ full }: IFull) => ({
    width: '100%',
    position: 'relative',
    padding: theme.spacing(0, 16),
    backgroundImage: full ? `url(${background})` : 'none',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // responsive
    [theme.breakpoints.down('lg')]: {
      // padding: theme.spacing(7.75, 8.125),
      padding: theme.spacing(0, 8.125),
    },

    [theme.breakpoints.down('sm-large')]: {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1),
    },
  }),
}))

interface IPaddingBox extends BoxProps {
  full?: boolean
  children?: React.ReactNode
}

const PaddingBox = ({
  full = false,
  children,
  ...props
}: IPaddingBox): JSX.Element => {
  const classes = useStyles({ full })
  return (
    <Box className={classes.root} {...props}>
      {children}
    </Box>
  )
}

export default PaddingBox
