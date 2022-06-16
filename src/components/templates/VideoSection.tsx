import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'
import { Box, Typography, Grid } from '@mui/material'
import { MCard, MCircularProgress } from '@atoms'
import { TwoLinedAvatar } from '@molecules'
import { VideoPlayer } from '@organisms'
import { MTheme } from 'theme'
// assets
import { SunEllipseIcon, PlayerIcon } from '../../assets/icons'
import links from '../../assets/images'
import videoPreviewExample from './../../assets/images/videoPreview.png'

const useStyles = makeStyles((theme: MTheme) => ({
  wrapper: {
    margin: theme.spacing(12, 'auto'),
    [theme.breakpoints.down('lg')]: {
      margin: theme.spacing(8, 'auto'),
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(6, 'auto'),
    },
  },
  root: {
    marginRight: 141,

    [theme.breakpoints.down('lg-medium')]: {
      marginRight: 0,
    },
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
  },
  cardsWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridRowGap: theme.spacing(2),
    gridColumnGap: theme.spacing(3),

    [theme.breakpoints.down(1050)]: {
      gridColumnGap: theme.spacing(1.25),
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm-large')]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
    },
  },
  videoWrapper: {
    maxWidth: 820,
    position: 'relative',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadiusMd,

    '& > img': {
      width: '100%',
      height: '100%',
    },

    [theme.breakpoints.down('lg')]: {
      margin: '0 auto',
    },
  },
  videoIcon: {
    width: '20%',
    height: 'auto',
    maxHeight: 140,
    maxWidth: 140,
  },
}))

const VideoSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.wrapper}>
      <Grid
        container
        alignItems="center"
        columnSpacing={{ xs: 3, 'lg-medium': 20 }}
        rowSpacing={{ xs: 4, 'md-large': 0 }}
        className={classes.root}
      >
        <Grid item xs={12} lg={5}>
          <Box className={classes.textWrapper}>
            <Typography variant="h2" marginBottom={4}>
              who we are?
            </Typography>
            <Box className={classes.cardsWrapper}>
              {new Array(6).fill(null).map((_, idx) => (
                <MCard key={idx}>
                  <TwoLinedAvatar
                    primaryText={t('cards.sixpack.' + `${idx + 1}`)}
                  >
                    <SunEllipseIcon />
                  </TwoLinedAvatar>
                </MCard>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className={classes.videoWrapper}>
            <VideoPlayer
              url={links.videos.intro.src}
              loader={<MCircularProgress size={80} />}
              light={videoPreviewExample}
              playIcon={<PlayerIcon className={classes.videoIcon} />}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default VideoSection
