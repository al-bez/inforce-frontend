import { SvgIconProps } from '@mui/material'

function MobileIcon(props?: SvgIconProps) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.333 2.667H9a2.67 2.67 0 00-2.667 2.666v21.334A2.67 2.67 0 009 29.333h13.333A2.67 2.67 0 0025 26.667V5.333a2.67 2.67 0 00-2.667-2.666zM9 26.667V5.333h13.333l.003 21.334H9z"
        fill="#fff"
      />
      <path
        d="M15.667 25.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z"
        fill="#fff"
      />
    </svg>
  )
}

export default MobileIcon
