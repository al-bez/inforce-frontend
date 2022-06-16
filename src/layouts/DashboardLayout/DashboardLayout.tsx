import React from 'react'
import clsx from 'clsx'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import {
  headerColorExtension,
  footerRenderExtension,
} from '../utils/layoutExtensions'
// components
import Header, { THeaderType } from '../Header'
import Footer from '../Footer'
import {
  IdNavigator,
  useNotifier,
  useSticky,
  detectScrollDirection,
} from 'hooks'
import { MTheme } from 'theme'

interface IHeaderStyles {
  bgColor: THeaderType
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  header: ({ bgColor }: IHeaderStyles) => ({
    position: 'fixed',
    top: 0,
    backgroundColor: theme.palette[bgColor].main,
  }),
  flex: {
    display: 'flex',
    transform: 'translateY(0)',
  },
  none: {
    // display: 'none',
    transform: 'translateY(-100%)',
  },
}))

interface IDashboard {
  children: React.ReactNode
}

function Dashboard({ children }: IDashboard) {
  const { pathname } = useLocation()
  const newPath = pathname.split('/')[1] || '/'
  let bgColor = headerColorExtension(newPath)
  const isFooterRendered = footerRenderExtension(newPath)
  const [ref, isSticky] = useSticky()
  const isScrollUp = detectScrollDirection()
  const classes = useStyles({ bgColor })

  if (isSticky) {
    // header color
    if (bgColor === 'primary') bgColor = 'secondary'
    else bgColor = 'primary'
  }

  useNotifier()

  return (
    <Box ref={ref} className={classes.root}>
      <IdNavigator />
      <Header
        bgColor={bgColor}
        className={clsx(
          isSticky && classes.header,
          !isScrollUp && classes.flex,
          (isScrollUp && isSticky && classes.flex) || (isSticky && classes.none)
        )}
      />
      {children}
      {isFooterRendered && <Footer />}
    </Box>
  )
}

export default Dashboard
