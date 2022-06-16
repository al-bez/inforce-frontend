import { SvgIconProps } from '@mui/material'

function PrevBtnIcon(props?: SvgIconProps) {
  return (
    <svg
      width={8}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.707 10.293L3.414 6l4.293-4.293L6.293.293.586 6l5.707 5.707 1.414-1.414z"
        fill="#161616"
      />
    </svg>
  )
}

export default PrevBtnIcon
