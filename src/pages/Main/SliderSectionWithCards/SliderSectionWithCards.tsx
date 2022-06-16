import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Slider, { Settings } from 'react-slick'
import useMediaQuery from '@mui/material/useMediaQuery'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { MButton } from '@atoms'
import { TextBlockWithHeader, PaddingBox } from '@molecules'
import { MobileSwipe } from '@organisms'
import { MTheme } from 'theme'
import { IProject } from 'types/project'
import Slidercard from './SliderCard'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > .MuiBox-root': {
      maxWidth: theme.spacing(84.875),
    },
  },
  btnBox: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sliderContainer: {
    width: '100%',
    marginTop: theme.spacing(2.875),
    paddingLeft: theme.spacing(16),
    overflow: 'hidden',

    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing(8),
    },
    [theme.breakpoints.down('sm-large')]: {
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1),
    },
    '& .slick-active': {
      transition: 'all 0.4s ease-in-out',
      transitionDelay: '0.4s',
    },
    '& .slick-slide:not(.slick-active)': {
      opacity: 0.5,
      transition: 'all 0.4s ease-in-out',
      transitionDelay: '0.4s',
    },
  },
}))

// ------------------------------------

const settings: Settings = {
  arrows: false,
  dots: false,
  infinite: false,
  speed: 800,
  slidesToScroll: 3,
  slidesToShow: 3,
  lazyLoad: 'progressive',
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1792,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1130,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 775, // sm
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 365, // sm
      settings: {
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ],
}

interface ISliderSectionWithCards {
  items: IProject[]
}

const SliderSectionWithCards = ({ items }: ISliderSectionWithCards) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:1240px)')
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <PaddingBox>
        <Box className={classes.root}>
          <TextBlockWithHeader
            header="Projects that we have done"
            subHeader="Apps Cases"
          >
            {t('main.slider.header')}
          </TextBlockWithHeader>
          <Box className={classes.btnBox}>
            <Link to="/results">
              <MButton color="primary" variant="contained">
                Veiw all projects
              </MButton>
            </Link>
          </Box>
        </Box>
      </PaddingBox>
      <Box sx={{ position: 'relative' }}>
        <Slider className={classes.sliderContainer} {...settings}>
          {items.map((item) => (
            <Slidercard key={item._id} item={item} />
          ))}
        </Slider>
        <MobileSwipe isMobile={matches} hasMargin />
      </Box>
    </React.Fragment>
  )
}

export default SliderSectionWithCards
