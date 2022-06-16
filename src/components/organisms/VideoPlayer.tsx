import ReactPlayer, { ReactPlayerProps } from 'react-player/'
import React, { useState } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    borderRadius: 16,
    overflow: 'hidden',
  },
}))

interface VideoPlayerProps extends ReactPlayerProps {
  loader?: React.ReactElement
}

const VideoPlayer = ({
  url,
  light,
  playIcon,
  loader,
  ...props
}: VideoPlayerProps) => {
  const classes = useStyles()
  const [playing, setPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  //  player fiber behavior
  const handleClick = () => {
    setPlaying(!playing)
  }

  const handleVideoProgress = ({ loaded }: { loaded: number }) => {
    if (loaded > 0) {
      setIsLoaded(true)
    }
  }

  return (
    <>
      <Box
        className={classes.root}
        sx={{
          backgroundColor: (theme) => theme.palette.text.primary,
          backgroundImage: (theme) =>
            playing && !isLoaded && loader
              ? theme.palette.text.primary
              : `url(${light})`,
          display: isLoaded ? 'none' : 'flex',
        }}
        onClick={handleClick}
      >
        {playing && !isLoaded ? loader : playIcon}
      </Box>
      {playing && (
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          playing={playing}
          autoPlay={true}
          playsinline={true}
          controls={true}
          onProgress={handleVideoProgress}
          {...props}
        />
      )}
    </>
  )
}

export default VideoPlayer
