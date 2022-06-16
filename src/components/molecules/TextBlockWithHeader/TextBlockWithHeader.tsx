import React from 'react'
import clsx from 'clsx'
import { Box, BoxProps, Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { makeStyles } from '@mui/styles'
import { MTheme } from 'theme'
import { PaletteColorOptions } from 'theme/palette'

// move this component to @sections ------------!

interface ITextColor {
  color: keyof PaletteColorOptions
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  subHeader: ({ color }: ITextColor) => ({
    color: theme.palette.primary[color],
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
  }),
  header: {
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
}))

interface ITextBlockWithHeader extends BoxProps {
  subHeader: string
  header: string
  className: string
  variant?: Variant
  color?: keyof PaletteColorOptions
  children: React.ReactNode
}

const TextBlockWithHeader = ({
  subHeader,
  header,
  className,
  variant = 'h2',
  children,
  color = 'main',
  ...props
}: Partial<ITextBlockWithHeader>) => {
  const classes = useStyles({
    color,
  })

  return (
    <Box className={clsx(classes.root, className)} {...props}>
      {/* <Typography variant="subtitle1" className="test"> */}
      <Typography variant="subtitle1" className={classes.subHeader}>
        {subHeader}
      </Typography>
      <Typography variant={variant} className={classes.header}>
        {header}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: children ? 2 : 0 }}>
        {children}
      </Typography>
    </Box>
  )
}

export default TextBlockWithHeader
