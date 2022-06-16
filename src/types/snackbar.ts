import {
  SnackbarKey,
  SnackbarMessage,
  VariantType,
  OptionsObject,
} from 'notistack'
export interface ISnackbarNotification {
  message: SnackbarMessage
  variant: VariantType
  key: SnackbarKey
  options?: OptionsObject
  dismissed?: boolean
}

export enum SnackbarTypes {
  ENQUEUE_SNACKBAR = 'inforce/notifications/ENQUEUE_SNACKBAR',
  CLOSE_SNACKBAR = 'inforce/notifications/CLOSE_SNACKBAR',
  REMOVE_SNACKBAR = 'inforce/notifications/REMOVE_SNACKBAR',
}

interface EnqueueSnackbar {
  type: SnackbarTypes.ENQUEUE_SNACKBAR
  notification: ISnackbarNotification
}

interface RemoveSnackbar {
  type: SnackbarTypes.REMOVE_SNACKBAR
  key: SnackbarKey
}

interface CloseSnackbar {
  type: SnackbarTypes.CLOSE_SNACKBAR
  dismissAll: boolean
  key: SnackbarKey
}

export type SnackBarAction = EnqueueSnackbar | RemoveSnackbar | CloseSnackbar
