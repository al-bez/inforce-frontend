import React from 'react'
import { useProgressiveImage } from 'hooks'

interface BlurredImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string
  placeholder: string
  className?: string
}

const BlurredImage: React.FC<BlurredImageProps> = ({
  src: highQualitySrc,
  placeholder: lowQualitySrc,
  style,
  className = '',
  ...props
}) => {
  const [src, { blur }] = useProgressiveImage(lowQualitySrc, highQualitySrc)

  return (
    <img
      src={src}
      className={className}
      {...props}
      style={{
        filter: blur ? 'blur(20px)' : 'none',
        transition: blur ? 'none' : 'filter 0.9s ease-out',
        ...style,
      }}
    />
  )
}

export default BlurredImage
