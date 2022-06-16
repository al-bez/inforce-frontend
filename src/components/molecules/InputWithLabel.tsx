import React from 'react'
import clsx from 'clsx'
import { Box, Typography, Input, InputLabel, InputProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { alpha } from '@mui/material/styles'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    marginBottom: theme.spacing(1),

    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
      borderRadius: '50%',
    },
  },
  input: {
    width: '100%',
    fontSize: theme.spacing(2.25),
    padding: 0,

    '& > input': {
      border: `2px solid ${alpha(theme.palette.grey[900], 0.15)}`,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(2),

      '&:focus': {
        border: `2px solid ${theme.palette.text.primary}`,
      },
    },
  },
  error: {
    '& input': {
      border: `2px solid ${theme.palette.error.main} !important`,
    },
  },
  label: {
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.spacing(2.25),
    marginLeft: 5,
  },

  errorMsg: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    color: theme.palette.error.main,
    marginTop: 4,
    marginLeft: 5,
  },

  // bad styles cuz of library
  telWrapper: {
    width: '100%',
    fontSize: theme.spacing(2.25),
    padding: 0,

    '& > .form-control': {
      height: 'inherit',
      width: 'inherit',
      border: `2px solid ${alpha(theme.palette.grey[900], 0.15)}`,
      borderRadius: theme.shape.borderRadius,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(2),

      '&:focus': {
        border: `2px solid ${theme.palette.text.primary}`,
      },
    },

    '& > .flag-dropdown': {
      width: 50,
      border: '2px solid transparent',
      borderRadius: 8,
      background: 'transparent',

      '& .country-list': {
        border: `2px solid ${alpha(theme.palette.grey[900], 0.15)}`,
        borderRadius: 8,
        outline: 'none',
        boxShadow: theme.shadows[3],

        '& .country': {
          borderRadius: 8,
        },
      },

      '&.open': {
        background: 'transparent',
        border: '2px solid transparent',
        '& .selected-flag': {
          background: 'transparent',
          border: '2px solid transparent',
        },
      },

      '&:hover': {
        background: 'transparent',
        border: '2px solid transparent',

        '& .selected-flag': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
}))

export interface IInputWithLabel extends InputProps {
  labelText: string
  errorMsg?: string
  children?: React.ReactElement
}

const InputWithLabel = ({
  labelText,
  errorMsg,
  name,
  children,
  ...props
}: IInputWithLabel): JSX.Element => {
  const classes = useStyles({ errorMsg })

  return (
    <Box className={classes.root}>
      <InputLabel
        htmlFor={name}
        className={classes.label}
        itemProp="data-error"
      >
        {labelText}
      </InputLabel>
      {children ? (
        React.Children.map(children, (child) => {
          return child && typeof child.type === 'string'
            ? child
            : React.cloneElement(child, {
                ...props,
                name,
                className: errorMsg && classes.error,
              })
        })
      ) : (
        <Input
          disableUnderline
          className={clsx(classes.input, errorMsg && classes.error)}
          name={name}
          {...props}
        />
      )}
      {errorMsg && (
        <Typography variant="body1" className={classes.errorMsg}>
          {errorMsg}
        </Typography>
      )}
    </Box>
  )
}

export default React.memo(InputWithLabel)
