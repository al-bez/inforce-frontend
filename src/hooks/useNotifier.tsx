import React from 'react'
import { SnackbarKey, useSnackbar } from 'notistack'
import { showSnackbar } from '@molecules'
import { useActions, useTypedSelector } from 'hooks'

let displayed: SnackbarKey[] = []

const useNotifier = () => {
  const { notifications } = useTypedSelector((state) => state.notifications)

  const { removeSnackbar } = useActions()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const storeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed, id]
  }

  const removeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed.filter((key) => id !== key)]
  }

  React.useEffect(() => {
    notifications.forEach(({ key, message, variant, dismissed = false }) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key)
        return
      }

      // do nothing if snackbar is already displayed
      if (displayed.includes(key)) return

      // display snackbar using notistack and customized component
      showSnackbar({
        message,
        variant,
        enqueueSnackbar,
        closeSnackbar: closeSnackbar,
        options: {
          key,
          onExited: (event, myKey) => {
            // remove this snackbar from redux store
            removeSnackbar(myKey)
            removeDisplayed(myKey)
          },
        },
      })

      // keep track of snackbars that we've displayed
      storeDisplayed(key)
    })
  }, [notifications, closeSnackbar, enqueueSnackbar, useActions])
}

export default useNotifier
