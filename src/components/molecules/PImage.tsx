import React from 'react'
import Box from '@mui/material/Box'
import ProgressiveImage from 'react-progressive-graceful-image'
import { MCircularProgress } from '@atoms'

interface IPImage
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string
  placeholder?: string
  className?: string
}

const PImage = ({
  src,
  placeholder = '',
  className = '',
  ...props
}: IPImage) => {
  return (
    <ProgressiveImage src={src} placeholder={placeholder} noRetry={true}>
      {(src: string, loading: boolean) => {
        if (loading)
          return (
            <Box className="preloader">
              <MCircularProgress
                sx={{ color: (theme) => theme.palette.text.primary }}
              />
            </Box>
          )
        return (
          <img
            className={className}
            src={src}
            alt={'inforce' + src.split('/').pop()}
            {...props}
          />
        )
      }}
    </ProgressiveImage>
  )
}

export default PImage
