import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'
import { VideoSection } from '@templates'
import { useTranslation } from 'react-i18next'
// assets
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {},
  section: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: theme.spacing(16),

    [theme.breakpoints.down('md-large')]: {
      flexDirection: 'column',
      paddingBottom: theme.spacing(8),
    },

    [theme.breakpoints.down('sm-large')]: {
      paddingBottom: theme.spacing(6),
    },
  },
  section1TextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
  },
  section1CardContainer: {
    width: theme.spacing(67.25),
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: `repeat(3, ${theme.spacing(12.875)})`,
    gridRowGap: theme.spacing(2),
    gridColumnGap: theme.spacing(3),

    [theme.breakpoints.down('xs-medium')]: {
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      alightItems: 'center',
      width: theme.spacing(41.25),
    },
  },
  section1VideoContainer: {
    height: theme.spacing(59.625),
    flex: 1,
    maxWidth: theme.spacing(102.5),
    marginLeft: theme.spacing(20.625),
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadiusMd,

    '& > img': {
      width: '100%',
      height: '100%',
    },

    [theme.breakpoints.down('md-large')]: {
      marginLeft: theme.spacing(0),
      maxWidth: theme.spacing(68.125),
      marginTop: theme.spacing(4),
    },

    [theme.breakpoints.down('sm-large')]: {
      maxWidth: theme.spacing(67.5),
    },
  },
  headerBlock: {
    maxWidth: theme.spacing(84.875),
    marginBottom: theme.spacing(7.5),

    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(3),
    },
  },
}))

const AboutUsSecondSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.root}>
      <VideoSection />
      <Box className={classes.headerBlock}>
        <Typography variant="h2" mb={4}>
          Our PRINCIPLES
        </Typography>
        <Typography variant="subtitle1">{t('about.principles')}</Typography>
      </Box>
    </Box>
  )
}

export default AboutUsSecondSection
