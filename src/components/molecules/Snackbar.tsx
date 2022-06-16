import { IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import {
  OptionsObject,
  SnackbarKey,
  SnackbarMessage,
  VariantType,
} from 'notistack'
import closeFill from '@iconify-icons/eva/close-fill'

interface SnackBar {
  message: SnackbarMessage
  variant: VariantType
  enqueueSnackbar: (
    message: SnackbarMessage,
    options?: OptionsObject
  ) => SnackbarKey
  closeSnackbar: (key?: SnackbarKey) => void
  options?: OptionsObject
}

const showSnackbar = ({
  message,
  variant,
  enqueueSnackbar,
  closeSnackbar,
  options,
}: SnackBar): SnackbarKey => {
  return enqueueSnackbar(message, {
    variant,
    action: (key: string) => (
      <IconButton
        onClick={() => closeSnackbar(key)}
        size="small"
        color="inherit"
      >
        <Icon icon={closeFill} width="24" height="24" />
      </IconButton>
    ),
    ...options,
  })
}

export default showSnackbar
