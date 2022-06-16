import { TwoLinedAvatar } from '@molecules'
import { SwipeIcon } from '../../assets/icons'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { MTheme } from 'theme'

interface IMobileSwipe {
  isMobile: boolean
  hasMargin?: boolean
}

const MobileSwipe = ({ isMobile, hasMargin }: IMobileSwipe) => {
  // NEED TO REVIEW
  const theme: MTheme = useTheme()
  const matches1 = useMediaQuery(theme.breakpoints.down('sm-large'))
  const matches2 = useMediaQuery(theme.breakpoints.down('sm'))

  return isMobile ? (
    <TwoLinedAvatar
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        width: (theme) => theme.spacing(6),
        height: (theme) => theme.spacing(6),
        position: 'absolute',
        bottom: (theme) => theme.spacing(2.5),
        right: 0,
        marginRight: (theme) => {
          let result = theme.spacing(8)

          if (matches1) result = theme.spacing(4)
          if (matches2) result = theme.spacing(1)

          return hasMargin ? result : 0
        },
      }}
    >
      <SwipeIcon />
    </TwoLinedAvatar>
  ) : null
}

export default MobileSwipe
