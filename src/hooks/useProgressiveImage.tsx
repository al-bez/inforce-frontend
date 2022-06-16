import React from 'react'

const useProgressiveImage = (lowQualitySrc: string, highQualitySrc: string) => {
  const [src, setSrc] = React.useState(lowQualitySrc)
  const ref = React.useRef(false)

  React.useEffect(() => {
    ref.current = true
    setSrc(lowQualitySrc)

    const img = new Image()
    img.src = highQualitySrc
    img.onload = () => {
      if (ref.current) {
        setSrc(highQualitySrc)
      }
    }

    return () => {
      ref.current = false
    }
  }, [lowQualitySrc, highQualitySrc])
  return [src, { blur: src === lowQualitySrc }] as const
}

export default useProgressiveImage
