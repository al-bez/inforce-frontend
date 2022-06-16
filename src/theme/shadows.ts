import { alpha } from '@mui/material/styles'
import { Shadows } from '@mui/material/styles/shadows'
import Palette from './palette'

const BASE_LIGHT = Palette.grey[500]
const BASE_DARK = Palette.text.disabled // 000

const onLight1 = alpha(BASE_LIGHT, 0.2)
const onLight2 = alpha(BASE_LIGHT, 0.14)
const onLight3 = alpha(BASE_LIGHT, 0.12)

const renderShadow = (opacity: number): string =>
  `0 16px 16px 0 ${alpha(BASE_DARK, opacity)}`

const shadows: Shadows = [
  'none', // 0
  `0px 2px 1px -1px ${onLight1},0px 1px 1px 0px ${onLight2},0px 1px 3px 0px ${onLight3}`, // 1
  renderShadow(0.15), // 2 primary
  renderShadow(0.06), // 3 card
  `1px solid ${alpha(BASE_DARK, 0.15)}`, // 4 border
  `0px 3px 5px -1px ${onLight1},0px 5px 8px 0px ${onLight2},0px 1px 14px 0px ${onLight3}`,
  `0px 3px 5px -1px ${onLight1},0px 6px 10px 0px ${onLight2},0px 1px 18px 0px ${onLight3}`,
  `0px 4px 5px -2px ${onLight1},0px 7px 10px 1px ${onLight2},0px 2px 16px 1px ${onLight3}`,
  `0px 5px 5px -3px ${onLight1},0px 8px 10px 1px ${onLight2},0px 3px 14px 2px ${onLight3}`,
  `0px 5px 6px -3px ${onLight1},0px 9px 12px 1px ${onLight2},0px 3px 16px 2px ${onLight3}`,
  `0px 6px 6px -3px ${onLight1},0px 10px 14px 1px ${onLight2},0px 4px 18px 3px ${onLight3}`,
  `0px 6px 7px -4px ${onLight1},0px 11px 15px 1px ${onLight2},0px 4px 20px 3px ${onLight3}`,
  `0px 7px 8px -4px ${onLight1},0px 12px 17px 2px ${onLight2},0px 5px 22px 4px ${onLight3}`,
  `0px 7px 8px -4px ${onLight1},0px 13px 19px 2px ${onLight2},0px 5px 24px 4px ${onLight3}`,
  `0px 7px 9px -4px ${onLight1},0px 14px 21px 2px ${onLight2},0px 5px 26px 4px ${onLight3}`,
  `0px 8px 9px -5px ${onLight1},0px 15px 22px 2px ${onLight2},0px 6px 28px 5px ${onLight3}`,
  `0px 8px 10px -5px ${onLight1},0px 16px 24px 2px ${onLight2},0px 6px 30px 5px ${onLight3}`,
  `0px 8px 11px -5px ${onLight1},0px 17px 26px 2px ${onLight2},0px 6px 32px 5px ${onLight3}`,
  `0px 9px 11px -5px ${onLight1},0px 18px 28px 2px ${onLight2},0px 7px 34px 6px ${onLight3}`,
  `0px 9px 12px -6px ${onLight1},0px 19px 29px 2px ${onLight2},0px 7px 36px 6px ${onLight3}`,
  `0px 10px 13px -6px ${onLight1},0px 20px 31px 3px ${onLight2},0px 8px 38px 7px ${onLight3}`,
  `0px 10px 13px -6px ${onLight1},0px 21px 33px 3px ${onLight2},0px 8px 40px 7px ${onLight3}`,
  `0px 10px 14px -6px ${onLight1},0px 22px 35px 3px ${onLight2},0px 8px 42px 7px ${onLight3}`,
  `0px 11px 14px -7px ${onLight1},0px 23px 36px 3px ${onLight2},0px 9px 44px 8px ${onLight3}`,
  `0px 11px 15px -7px ${onLight1},0px 24px 38px 3px ${onLight2},0px 9px 46px 8px ${onLight3}`,
]

export default shadows
