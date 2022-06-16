import React from 'react'
import { Icon } from '@iconify/react'
import { SnackbarOrigin, SnackbarProvider } from 'notistack'
import infoFill from '@iconify-icons/eva/info-fill'
import alertCircleFill from '@iconify-icons/eva/alert-circle-fill'
import alertTriangleFill from '@iconify-icons/eva/alert-triangle-fill'
import checkmarkCircle2Fill from '@iconify-icons/eva/checkmark-circle-2-fill'
import { makeStyles } from '@mui/styles'
import { alpha } from '@mui/material/styles'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => {
  const createStyle = (color: string) => {
    return {
      color: `${theme.palette[color].main} !important`,
      backgroundColor: `${theme.palette.primary.light} !important`,
      '& $icon': {
        color: theme.palette[color].main,
        backgroundColor: alpha(theme.palette[color].main, 0.16),
      },
    }
  }

  return {
    root: {
      padding: theme.spacing(1.5),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.grey[800],
      backgroundColor: `${theme.palette.grey[900]} !important`,
    },
    icon: {
      minWidth: 40,
      minHeight: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: theme.spacing(1.5),
      borderRadius: theme.shape.borderRadiusSm,
      '& svg': { width: 24, height: 24 },
    },
    message: {
      padding: 0,
      fontWeight: theme.typography.fontWeightMedium,
    },
    action: {
      marginRight: -4,
      '& svg': {
        width: 20,
        height: 20,
        opacity: 0.48,
        '&:hover': { opacity: 1 },
      },
    },
    info: createStyle('info'),
    success: createStyle('success'),
    warning: createStyle('warning'),
    error: createStyle('error'),
  }
})

// ----------------------------------------------------------------------

interface NotistackProviderProps {
  children: React.ReactNode
  maxSnack?: number
  autoHideDuration?: number
  snackbarOrigin?: SnackbarOrigin
}

interface NotistackClasses {
  contentRoot: string
  message: string
  action: string
  variantInfo: string
  variantSuccess: string
  variantWarning: string
  variantError: string
}

function NotistackProvider({
  children,
  maxSnack = 5,
  autoHideDuration = 8000,
  snackbarOrigin = { vertical: 'bottom', horizontal: 'left' },
}: NotistackProviderProps) {
  const classes = useStyles()
  const snackProviderClasses: NotistackClasses = {
    contentRoot: classes.root,
    message: classes.message,
    action: classes.action,
    variantInfo: classes.info,
    variantSuccess: classes.success,
    variantWarning: classes.warning,
    variantError: classes.error,
  }

  return (
    <SnackbarProvider
      dense
      maxSnack={maxSnack}
      preventDuplicate
      autoHideDuration={autoHideDuration}
      anchorOrigin={snackbarOrigin}
      iconVariant={{
        success: (
          <span className={classes.icon}>
            <Icon icon={checkmarkCircle2Fill} />
          </span>
        ),
        error: (
          <span className={classes.icon}>
            <Icon icon={infoFill} />
          </span>
        ),
        warning: (
          <span className={classes.icon}>
            <Icon icon={alertTriangleFill} />
          </span>
        ),
        info: (
          <span className={classes.icon}>
            <Icon icon={alertCircleFill} />
          </span>
        ),
      }}
      classes={snackProviderClasses}
    >
      {children}
    </SnackbarProvider>
  )
}

export default NotistackProvider
