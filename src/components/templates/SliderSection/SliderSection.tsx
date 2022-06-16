import { makeStyles } from '@mui/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import { TextBlockWithHeader } from '@molecules'
import SliderSectionCard from './SliderSectionCard'
import { MobileSwipe } from '@organisms'
import { MTheme } from 'theme'
import { IProject } from 'types/project'
import { useTranslation } from 'react-i18next'

const settings: Settings = {
  className: 'center',
  centerMode: true,
  lazyLoad: 'progressive',
  slidesToShow: 1,
  arrows: false,
  speed: 500,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        centerPadding: '17.3%',
      },
    },
    {
      breakpoint: 1000,
      settings: {
        centerPadding: '9.3%',
      },
    },
  ],
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    '& > .MuiBox-root:first-child': {
      maxWidth: theme.spacing(84.875),
    },
  },
  align: {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: theme.spacing(102.5),
    marginBottom: theme.spacing(1),
  },
  sliderContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',

    '& .slick-track': {
      display: 'flex',
      paddingTop: 23,
    },
    '& .slick-slide': {
      height: 'inherit',

      '& > div': {
        height: '100%',
        paddingBottom: theme.spacing(17.875),
      },
    },
    '& .slick-center': {
      transition: 'all 0.4s ease-in-out',
      transitionDelay: '0.4s',
      transform: 'translateY(-23px)',
      '& > div': {
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.4s',
      },
    },
    '& .slick-slide:not(.slick-center)': {
      opacity: 0.5,
      transition: 'all 0.4s ease-in-out',
      transitionDelay: '0.4s',

      '& > div': {
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.4s',
      },
    },
  },

  speechmarks: {
    fontSize: theme.spacing(8.125),
    color: theme.palette.primary.main,
  },
  left: {
    position: 'absolute',
    top: 0,
    left: theme.spacing(2),
  },
  right: {
    position: 'absolute',
    bottom: 0,
    right: theme.spacing(2),
  },
  temp: {
    height: theme.spacing(30.875),
    minWidth: 820,
    background: 'aqua',
    marginRight: theme.spacing(3),
  },
}))

interface ISliderSection {
  cards: IProject[]
}

const SliderSection = ({ cards }: ISliderSection) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:1240px)')
  const { t } = useTranslation()

  return (
    <Box className={classes.root}>
      <TextBlockWithHeader
        header="Customer trust us"
        subHeader="REVIEWS"
        className={classes.align}
      >
        {t('general.slider.header')}
      </TextBlockWithHeader>
      <Box className={classes.sliderContainer}>
        <Slider {...settings}>
          {cards.map((card) => (
            <SliderSectionCard key={card._id} card={card} />
          ))}
        </Slider>
        <MobileSwipe isMobile={matches} hasMargin />
      </Box>
    </Box>
  )
}

export default SliderSection
