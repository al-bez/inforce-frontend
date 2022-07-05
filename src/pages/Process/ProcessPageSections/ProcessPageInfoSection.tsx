import { useTranslation } from 'react-i18next'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { PaddingBox, PImage } from '@molecules'
import { CustomDonut } from '@organisms'
import { MTheme } from 'theme'
import links from '../../../assets/images'
import { useState } from 'react'
import { processImages } from '../../../static-data/processView'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(12),
    display: 'grid',
    gridTemplateColumns: '1fr 2.5fr',
    gap: theme.spacing(20),
    [theme.breakpoints.down('lg-medium')]: {
      gap: theme.spacing(0),
    },
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr',
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
    },
  },
  textWithDonut: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('lg-medium')]: {
      marginRight: theme.spacing(6),
    },
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'row',
      paddingBottom: theme.spacing(6),
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md-large')]: {
      marginRight: theme.spacing(0),
    },
    [theme.breakpoints.down('sm-large')]: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(3),
    },
  },
  donutBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 498,
    minWidth: 498,

    [theme.breakpoints.down('lg-medium')]: {
      height: 386,
      minWidth: 386,
    },

    [theme.breakpoints.down('lg')]: {
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('sm-large')]: {
      marginLeft: theme.spacing(0),
      height: 'auto',
      minWidth: 'auto',
      marginTop: theme.spacing(6.75),
      marginBottom: theme.spacing(6.75),
    },
  },
  textBlock: {
    maxWidth: theme.spacing(62.75),
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  subtitle: {
    display: 'none',
    [theme.breakpoints.down('lg')]: {
      display: 'block',
      paddingTop: theme.spacing(3),
    },
  },
  bgBlock: {
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
    maxHeight: theme.spacing(82.375),
    borderRadius: theme.spacing(2),
    padding: theme.spacing(8),
    backgroundColor: theme.palette.grey[300],

    '& .preloader': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      [theme.breakpoints.down('sm')]: {
        top: '10%',
      },
    },
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(4),
      maxWidth: '100%',
      height: 386,
    },
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageText: {
    position: 'relative',
    zIndex: 2,
  },
  coloredText: {
    color: theme.palette.primary.main,
  },
}))

const ProcessPageInfoSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [activeImage, setActiveImage] = useState<number>(0)
  console.log(links.processView)
  return (
    <PaddingBox>
      <Box className={classes.root}>
        <Box className={classes.textWithDonut}>
          <Box className={classes.textBlock} mb={2}>
            <Typography variant="h2">
              Become <span className={classes.coloredText}>more mobile</span>{' '}
              with us — whatever it may be
            </Typography>
            <Box className={classes.subtitle}>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                quis lectus tincidunt id mi amet, viverra quam felis.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.donutBox}>
            <CustomDonut setActiveImage={setActiveImage} />
          </Box>
        </Box>

        <Box className={classes.bgBlock}>
          <PImage
            className={classes.image}
            src={processImages[activeImage].src}
            placeholder={links.processView.writeBg.src_pixel}
          />
          <Box className={classes.imageText}>
            <Typography variant="h3" color="secondary">
              {processImages[activeImage].title}
            </Typography>
            <Typography color="secondary" variant="subtitle2">
              {processImages[activeImage].description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </PaddingBox>
  )
}

export default ProcessPageInfoSection
