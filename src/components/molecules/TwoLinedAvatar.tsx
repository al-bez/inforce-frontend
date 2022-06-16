import { Avatar, Box, Typography, AvatarProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import clsx from 'clsx'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  primaryText: {
    color: theme.palette.text.primary,
    textTransform: 'capitalize',
  },
  secondaryText: {
    color: theme.palette.text.primary,
    whiteSpace: 'pre-line',
  },
}))

interface ITwoLinedAvatar extends AvatarProps {
  children: React.ReactNode
  icon: string
  primaryText: string | React.ReactNode
  secondaryText: string | React.ReactNode
}

function TwoLinedAvatar({
  children,
  icon,
  primaryText,
  secondaryText,
  className,
  ...props
}: Partial<ITwoLinedAvatar>) {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.root, className)}>
      <Avatar
        src={icon}
        sx={{
          width: 64,
          height: 64,
          backgroundColor: icon ? 'transparent' : 'primary.main',
        }}
        {...props}
      >
        {children}
      </Avatar>
      <Box sx={{ ml: 1 }}>
        <Typography
          variant="subtitle2"
          className={classes.primaryText}
          fontWeight={700}
        >
          {primaryText}
        </Typography>
        <Typography
          component={'span'}
          variant="subtitle1"
          className={classes.secondaryText}
          sx={{ mt: 1 }}
        >
          {secondaryText}
        </Typography>
      </Box>
    </Box>
  )
}

export default TwoLinedAvatar
