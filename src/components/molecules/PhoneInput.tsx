import React from 'react'
import clsx from 'clsx'
import PhoneTextField, { PhoneInputProps } from 'react-phone-input-2'
import { makeStyles } from '@mui/styles'
import { alpha } from '@mui/material/styles'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
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

      // this styles prevents default border to overflow mui border
      '&.open': {
        background: 'transparent',
        '& .selected-flag': {
          background: 'transparent',
          borderRadius: 8,

          '&:hover': {
            border: 'none',
            borderRadius: 8,
          },
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

interface IPhoneInput extends PhoneInputProps {
  className?: string
}

const PhoneInput: React.FC<IPhoneInput> = ({ className, ...props }) => {
  const classes = useStyles()
  return (
    <PhoneTextField
      containerClass={clsx(classes.telWrapper, className)}
      {...props}
    />
  )
}

export default PhoneInput
