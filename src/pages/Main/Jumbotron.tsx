import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { MButton } from '@atoms'
import {
  PaddingBox,
  FiveStarCard,
  BlurredImage,
  GhostHeaderBox,
  TextBlockWithHeader,
} from '@molecules'
import { useNavigation } from 'hooks'
import { MTheme } from 'theme'
import links from '../../assets/images'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(24),
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    position: 'relative',

    // responsive
    [theme.breakpoints.down('lg-medium')]: {
      paddingBottom: theme.spacing(6.75),
    },

    [theme.breakpoints.down('lg')]: {
      height: 990,
      paddingTop: theme.spacing(8),
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'min-content',
    },
    [theme.breakpoints.down('sm-large')]: {
      height: 794,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
      height: 680,
    },
  },
  infoWrapper: {
    display: 'flex',
  },
  info: {
    width: theme.spacing(84.875),
    display: 'flex',
    alignItems: 'flex-start',
    zIndex: 2,
    flexDirection: 'column',
    color: theme.palette.primary.light,

    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },

    '& > .MuiTypography-root': {
      '&:first-child': {
        textTransform: 'uppercase',
      },
      '&:nth-child(2)': {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        textTransform: 'uppercase',
      },
    },
  },
  imageContainer: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    right: -140,
    zIndex: 1,
    bottom: -40,

    [theme.breakpoints.down('lg-medium')]: {
      right: -130,
      bottom: -40,
      transform: 'scale(1.05)',
    },

    [theme.breakpoints.down('lg')]: {
      right: 5,
      bottom: -260,
      transform: 'scale(0.6)',
    },
    [theme.breakpoints.down('md')]: {
      right: -50,
      bottom: -240,
      transform: 'scale(0.5)',
    },
    [theme.breakpoints.down('sm')]: {
      right: -40,
      bottom: -245,
      transform: 'scale(0.45)',
    },
    [theme.breakpoints.down('xs-medium')]: {
      right: -25,
      bottom: -280,
      transform: 'scale(0.35)',
    },
  },
  tabletImage: {
    position: 'absolute',
    right: '0',
    width: 'auto',
    height: '100%',
    animation: '$floatTablet 15s ease-in-out infinite',
  },
  phoneImage: {
    position: 'absolute',
    right: '-40px',
    width: 'auto',
    height: '100%',
    animation: '$floatPhone 10s ease-in-out infinite',
  },
  consultation: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  btnWrapper: {
    width: 'calc(50% - 12px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: theme.spacing(3),

    [theme.breakpoints.down('sm-large')]: {
      width: '100%',
    },
  },
  card: {
    alignSelf: 'end',
    marginLeft: -120,
    width: 'calc(50% - 12px)',
    maxWidth: 400,
    position: 'relative',
    zIndex: 100,
    [theme.breakpoints.down('lg')]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down('sm-large')]: {
      display: 'none',
    },
  },
  typographyAdditionalStyle: {
    '& > .MuiTypography-root:last-child': {
      maxWidth: 400,
    },
  },
  '@keyframes floatPhone': {
    '0%': {
      transform: 'translate(0px, 0px) scale(0.9)',
    },
    '50%': {
      transform: 'translate(15px, -20px) scale(0.9)',
    },
    '100%': {
      transform: 'translate(0px, 0px) scale(0.9)',
    },
  },
  '@keyframes floatTablet': {
    '0%': {
      transform: 'translate(0px, 0px) scale(1.1)',
    },
    '50%': {
      transform: 'translate(15px, 20px) scale(1.1)',
    },
    '100%': {
      transform: 'translate(0px, 0px) scale(1.1)',
    },
  },
}))

const Jumbotron = () => {
  const classes = useStyles()
  const { navigate } = useNavigation('consultation-form')

  return (
    <PaddingBox full>
      <GhostHeaderBox />
      <Box className={classes.root}>
        <Box className={classes.infoWrapper}>
          <Box className={classes.info}>
            <TextBlockWithHeader
              header="Full-Cycle Web & Mobile App Development"
              subHeader="Inforce"
              variant="h1"
              color="light"
              className={classes.typographyAdditionalStyle}
            >
              Talented IT experts to make your ideas go live Pursuing the
              highest quality for your business in a timely & seamless manner
              <br />
              Inforce is about delivering amazing and intuitive solutions on
              time
            </TextBlockWithHeader>

            <MButton
              color="secondary"
              variant="contained"
              sx={{ marginTop: 1 }}
              onClick={navigate}
            >
              Free consultation
            </MButton>
          </Box>

          <Box className={classes.card}>
            <FiveStarCard />
          </Box>
        </Box>
        <Box className={classes.imageContainer}>
          <BlurredImage
            src={links.mainView.tabletLab.src}
            placeholder={links.mainView.tabletLab.src_pixel}
            className={classes.tabletImage}
          />
          <BlurredImage
            src={links.mainView.phoneLab.src}
            placeholder={links.mainView.phoneLab.src_pixel}
            className={classes.phoneImage}
          />
        </Box>
      </Box>
    </PaddingBox>
  )
}

export default Jumbotron
