import { Typography, Grid, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {
  SvgContainer,
  TextBlockWithHeader,
  PaddingBox,
  PImage,
} from '@molecules'
import { MobileSwipe } from '@organisms'
import { MTheme } from 'theme'
import useMediaQuery from '@mui/material/useMediaQuery'
import links from '../../../assets/images'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    alignItems: 'center',
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.down('md-large')]: {
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
  },
  svgBlock: {
    position: 'relative',
    width: '100%',
  },
  blockWithRadioBtn: {
    position: 'relative',
  },
  textBlockRadio: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down('xs-medium')]: {
      width: theme.spacing(75.875),
    },
  },
  radioBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs-medium')]: {
      width: theme.spacing(75.875),
    },
  },
  iconItem: {
    position: 'relative',
    width: theme.spacing(8.75),
    height: theme.spacing(4),
    border: `6px solid ${theme.palette.primary.main}`,
    backgroundColor: 'white',
    borderRadius: '100px',
  },
  border: {
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(0.125),
    maxWidth: theme.spacing(22.875),
  },
  smallTextBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('xs-medium')]: {
      width: theme.spacing(75.875),
    },
  },
  radioContainer: {
    overflow: 'scroll',
    marginTop: theme.spacing(2),
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  image: {
    maxHeight: 416,

    [theme.breakpoints.down('sm-large')]: {
      maxHeight: 258,
    },
    [theme.breakpoints.down('xs-medium')]: {
      maxHeight: 180,
    },
  },
  pseudoBlock: {
    height: '1px',
    flexBasis: 'calc(100% - 128px)',
    backgroundColor: theme.palette.primary.main,
  },
}))

const ProcessPageSecondInfo = () => {
  const matches = useMediaQuery('(max-width:360px)')

  const classes = useStyles()
  return (
    <PaddingBox>
      <Grid
        container
        columnSpacing={{ xs: 0, 'md-large': 5, lg: 10, 'lg-medium': 20 }}
        rowSpacing={{ xs: 6, lg: 8 }}
        className={classes.root}
      >
        <Grid item xs={12} md-large={6} className={classes.svgBlock}>
          <SvgContainer className={classes.image}>
            <PImage src={links.shared.phonesPair.src} />
          </SvgContainer>
        </Grid>
        <Grid item xs={12} md-large={6} className={classes.blockWithRadioBtn}>
          <TextBlockWithHeader
            header="The right cooperation model for your needs"
            subHeader="PROCESS"
          >
            A cooperation model describes the way we work together. The best
            strategy of achieving your goals can differ. Perhaps you would do
            best to outsource an entire project, or to building your own
            dedicated team.
          </TextBlockWithHeader>
          <Box className={classes.radioContainer}>
            <Box className={classes.textBlockRadio}>
              <Typography variant="subtitle2"> Dedicated Team</Typography>
              <Typography variant="subtitle2"> Blended Team</Typography>
              <Typography variant="subtitle2"> Managed Team</Typography>
              <Typography variant="subtitle2"> Software Solution</Typography>
            </Box>

            <Box className={classes.radioBlock}>
              <Box className={classes.iconItem}></Box>
              <Box className={classes.pseudoBlock}></Box> {/*pseudoBlock*/}
              <Box className={classes.iconItem}></Box>
              <Box className={classes.pseudoBlock}></Box> {/*pseudoBlock*/}
              <Box className={classes.iconItem}></Box>
              <Box className={classes.pseudoBlock}></Box> {/*pseudoBlock*/}
              <Box className={classes.iconItem}></Box>
            </Box>
            <MobileSwipe isMobile={matches} hasMargin />
            <Box className={classes.smallTextBlock}>
              <Typography variant="body1">Lower hourly price</Typography>
              <Typography variant="body1">Higher hourly price</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PaddingBox>
  )
}

export default ProcessPageSecondInfo
