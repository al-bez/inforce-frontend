import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'
import { MTheme } from 'theme'
import { PImage } from '@molecules'
import links from '../../../assets/images'

const useStyles = makeStyles((theme: MTheme) => ({
  container: {
    marginBottom: theme.spacing(12),
    display: 'flex',
    gap: '1%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.down('md-large')]: {
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
    [theme.breakpoints.down('sm-large')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
  },
  imgBox: {
    position: 'relative',
    width: '31.5%',
    height: theme.spacing(34.375),
    backgroundColor: theme.palette.grey[300],
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    zIndex: 1,

    [theme.breakpoints.down('md-large')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm-large')]: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      height: 182,
    },
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imgTextBlock: {
    position: 'relative',
    zIndex: 2,
    // padding: theme.spacing(14.25, 21, 14.25, 21),
  },
}))

const PhotoSection = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.imgBox}>
        <PImage
          className={classes.image}
          src={links.aboutUs.img1.src}
          placeholder={links.aboutUs.img1.src_pixel}
        />
        <Box className={classes.imgTextBlock}>
          <Typography variant="h2" color="secondary">
            Listen
          </Typography>
        </Box>
      </Box>
      <Box className={classes.imgBox}>
        <PImage
          className={classes.image}
          src={links.aboutUs.img2.src}
          placeholder={links.aboutUs.img2.src_pixel}
        />
        <Box className={classes.imgTextBlock}>
          <Typography variant="h2" color="secondary">
            Question
          </Typography>
        </Box>
      </Box>
      <Box className={classes.imgBox}>
        <PImage
          className={classes.image}
          src={links.aboutUs.img3.src}
          placeholder={links.aboutUs.img3.src_pixel}
        />
        <Box className={classes.imgTextBlock}>
          <Typography variant="h2" color="secondary">
            Deliver
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PhotoSection
