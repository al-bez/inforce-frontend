import { SvgIconProps } from '@mui/material'

function NextBtnIcon(props?: SvgIconProps) {
  return (
    <svg
      width={8}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.293 1.707L4.586 6 .293 10.293l1.414 1.414L7.414 6 1.707.293.293 1.707z"
        fill="#161616"
      />
    </svg>
  )
}

export default NextBtnIcon
