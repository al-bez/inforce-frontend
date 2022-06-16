import React from 'react'
import clsx from 'clsx'
import Box, { BoxProps } from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import background from '../../assets/images/rounded-background.png'
import { MTheme } from 'theme'

const getSCSizes = (theme: MTheme) => ({
  xs: {
    maxWidth: 246,
    height: 223,
  },
  sm: {
    maxWidth: 374,
    height: 348,
  },
  md: {
    maxWidth: 820,
    height: 416,
    [theme.breakpoints.down('lg')]: {
      height: 308,
    },
    [theme.breakpoints.down('sm-large')]: {
      height: 258,
    },
  },
  lg: {
    maxWidth: 961,
    height: 584,
    [theme.breakpoints.down('lg')]: {
      height: 308,
    },
  },
})

const useStyles = makeStyles((theme: MTheme) => ({
  root: ({ size }: { size: TSize }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadiusMd,
    backgroundColor: theme.palette.primary.main,
    background: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...getSCSizes(theme)[size],
    '& img': {
      maxWidth: '100%',
      width: '90%',
      [theme.breakpoints.down('md-large')]: {
        width: '68%',
      },
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        minWidth: '100%',
      },
    },
  }),
}))

type TSize = 'xs' | 'sm' | 'md' | 'lg'
interface ISvgContainer extends BoxProps {
  size: TSize
  chidlren: React.ReactNode
}

const SvgContainer = ({
  size = 'md',
  className = '',
  children,
  ...props
}: Partial<ISvgContainer>): JSX.Element => {
  const classes = useStyles({ size })

  return (
    <Box className={clsx(classes.root, className)} {...props}>
      {children}
    </Box>
  )
}

export default SvgContainer
