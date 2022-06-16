import { SvgIcon, SvgIconProps } from '@mui/material'

function PlayerIcon(props?: SvgIconProps) {
  return (
    <SvgIcon
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 25 25"
    >
      <path
        d="M12.5,25A12.5,12.5,0,1,1,25,12.5,12.51,12.51,0,0,1,12.5,25Zm0-24A11.5,11.5,0,1,0,24,12.5,11.51,11.51,0,0,0,12.5,1Zm-3,17a.5.5,0,0,1-.5-.5V7.5a.5.5,0,0,1,.77-.42l8,5a.5.5,0,0,1,0,.85l-8,5A.5.5,0,0,1,9.5,18ZM10,8.4v8.2l6.55-4.1Z"
        fill="#DF263E"
      />
    </SvgIcon>
  )
}

export default PlayerIcon
