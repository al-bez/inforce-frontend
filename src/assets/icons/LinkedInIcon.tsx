import { SvgIconProps } from '@mui/material'

function LinkedInIcon(props?: SvgIconProps) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.983 7.197a2.188 2.188 0 1 0 0-4.376 2.188 2.188 0 0 0 0 4.376ZM9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237Zm-6.142 0H6.87v12.139H3.095V8.855Z"
        opacity={0.75}
        fill="#fff"
      />
    </svg>
  )
}

export default LinkedInIcon
