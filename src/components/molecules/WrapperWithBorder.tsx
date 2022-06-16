import React from 'react'
import { makeStyles } from '@mui/styles'
import Box, { BoxProps } from '@mui/material/Box'
import { alpha } from '@mui/material/styles'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    padding: theme.spacing(8),
    border: `1px solid ${alpha(theme.palette.grey[900], 0.15)}`,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(12, 'auto'),

    [theme.breakpoints.down('lg')]: {
      margin: theme.spacing(8, 'auto'),
    },

    [theme.breakpoints.down('md-large')]: {
      flexDirection: 'column',
      alignItems: 'start',
    },
    [theme.breakpoints.down('sm-large')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      margin: theme.spacing(6, 'auto'),
    },
  },
}))

interface IWrapperWithBorder extends BoxProps {
  children: React.ReactNode
}

export const WrapperWithBorder = ({
  children,
  ...props
}: IWrapperWithBorder) => {
  const classes = useStyles()

  return (
    <Box className={classes.root} {...props}>
      {children}
    </Box>
  )
}

export default WrapperWithBorder
