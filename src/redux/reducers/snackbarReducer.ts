import { SnackbarTypes, ISnackbarNotification, SnackBarAction } from 'types'

type IDefaultState = {
  notifications: ISnackbarNotification[]
}

const defaultState: IDefaultState = {
  notifications: [],
}

export default (state = defaultState, action: SnackBarAction) => {
  switch (action.type) {
    case SnackbarTypes.ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.notification,
          },
        ],
      }

    case SnackbarTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          action.dismissAll || notification.key === action.key
            ? { ...notification, dismissed: true }
            : { ...notification }
        ),
      }

    case SnackbarTypes.REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.key !== action.key
        ),
      }
    default:
      return state
  }
}
