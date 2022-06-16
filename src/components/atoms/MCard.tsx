import clsx from 'clsx'
import Card, { CardProps } from '@mui/material/Card'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { MTheme } from 'theme'

// FIX_TS

export const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    padding: theme.spacing(1.375, 1.875),
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[0],
    border: theme.shadows[4],
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      boxShadow: theme.shadows[2],
      transform: 'translateY(-2px)',
    },
  },
}))

interface IMCard extends CardProps {
  children: React.ReactNode
  className?: string
}

function MCard({ children, className, ...props }: IMCard) {
  const classes = useStyles()

  return (
    <Card className={clsx(classes.root, className)} {...props}>
      {children}
    </Card>
  )
}

export default MCard
