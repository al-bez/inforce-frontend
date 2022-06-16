import { SnackbarKey } from 'notistack'
import { SnackbarTypes, ISnackbarNotification } from 'types'
import { v4 as uuidv4 } from 'uuid'

export const enqueueSnackbar = (
  notification: Omit<ISnackbarNotification, 'key'>
) => {
  const key = notification.options && notification.options.key

  return {
    type: SnackbarTypes.ENQUEUE_SNACKBAR,
    notification: {
      ...notification,
      key: key || uuidv4(),
    },
  }
}

export const closeSnackbar = (key: SnackbarKey) => ({
  type: SnackbarTypes.CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
})

export const removeSnackbar = (key: SnackbarKey) => ({
  type: SnackbarTypes.REMOVE_SNACKBAR,
  key,
})
