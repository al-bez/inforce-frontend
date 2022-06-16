import React from 'react'
import { makeStyles } from '@mui/styles'
import { capitalize } from '@mui/material/utils'
import Button, { ButtonProps } from '@mui/material/Button'
import clsx from 'clsx'
import { MTheme } from 'theme'
import { ClassNameMap } from '@mui/styles'

const useStyles = makeStyles((theme: MTheme) => {
  const applyColor = (color: string) => ({
    // primary, secondary
    color: theme.palette[color].light,
    backgroundColor: theme.palette[color].main,
    padding: theme.spacing(2, 3),
    fontSize: theme.spacing(2.25),
    lineHeight: theme.spacing(2.625),
    boxShadow: 'none',
    borderRadius: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette[color].main,
    },
  })

  return {
    containedPrimary: applyColor('primary'),
    containedSecondary: applyColor('secondary'),
    outlinedPrimary: applyColor('secondary'),
    outlinedSecondary: applyColor('primary'),
  }
})

type TClasses = ClassNameMap<'containedPrimary' | 'containedSecondary'> & {
  [key: string]: string
}

interface IMButton extends ButtonProps {
  children: React.ReactNode
  className: string
}

const MButton = ({
  color = 'primary',
  variant = 'text',
  children,
  className,
  ...other
}: Partial<IMButton>) => {
  const classes: TClasses = useStyles({ color })

  return (
    <Button
      color={color}
      variant={variant}
      className={clsx(classes[`${variant}${capitalize(color)}`], className)}
      {...other}
    >
      {children}
    </Button>
  )
}

export default MButton
