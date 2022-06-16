import React from 'react'
import Slider, { CustomArrowProps } from 'react-slick'
import { Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Icon } from '@iconify/react'
import PrevIcon from '@iconify-icons/eva/arrow-ios-back-fill'
import NextIcon from '@iconify-icons/eva/arrow-ios-forward-fill'
import { MButton } from '@atoms'
import {
  SvgContainer,
  TextBlockWithHeader,
  GhostHeaderBox,
  FiveStarCard,
  PImage,
} from '@molecules'
import { MTheme } from 'theme'
import { useNavigation } from 'hooks'
import links from '../../../../assets/images'
import SliderItem from './SliderItem'

const ITEMS = [
  {
    imageSrc: links.logos.react.src,
    description: 'React',
  },
  {
    imageSrc: links.logos.html.src,
    description: 'HTML5',
  },
  {
    imageSrc: links.logos.css.src,
    description: 'CSS3',
  },
  {
    imageSrc: links.logos.cypress.src,
    description: 'Cypress',
  },
  {
    imageSrc: links.logos.js.src,
    description: 'Javascript',
  },
  {
    imageSrc: links.logos.mui.src,
    description: 'mui',
  },
  {
    imageSrc: links.logos.redux.src,
    description: 'Redux',
  },
  {
    imageSrc: links.logos.testingLibrary.src,
    description: 'Testing library',
  },
  {
    imageSrc: links.logos.ts.src,
    description: 'Typescript',
  },
]

const settings = {
  infinite: ITEMS.length > 4,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  dots: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToScroll: 6,
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToScroll: 4,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
  ],
}

function SampleNextArrow(props: CustomArrowProps) {
  const { className, onClick } = props
  return (
    <Icon
      className={className}
      style={{ right: -24, zIndex: 10, width: 24, height: 24 }}
      onClick={onClick}
      icon={NextIcon}
      color="black"
    />
  )
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props
  return (
    <Icon
      className={className}
      style={{ left: -24, zIndex: 10, width: 24, height: 24 }}
      onClick={onClick}
      icon={PrevIcon}
      color="black"
    />
  )
}

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(12),

    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
    },
  },
  fiveStarCardBox: {
    maxWidth: theme.spacing(50),
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    right: '-6.5vw',
    alignItems: 'flex-end',
    [theme.breakpoints.down(1770)]: {
      right: '-14.5vw',
    },
    [theme.breakpoints.down('lg-medium')]: {
      maxWidth: theme.spacing(36.25),
    },
    [theme.breakpoints.down(1200)]: {
      display: 'none',
    },
  },

  mainHeader: {
    maxWidth: theme.spacing(49.75),
    paddingBottom: theme.spacing(3),

    [theme.breakpoints.down('sm-large')]: {
      maxWidth: '100%',
    },
    '& .MuiTypography-root:nth-child(2)': {
      fontSize: theme.spacing(6.25),
      [theme.breakpoints.down('md-large')]: {
        fontSize: theme.spacing(5),
      },
      [theme.breakpoints.down('sm-large')]: {
        fontSize: theme.spacing(4.625),
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(4.5),
      },
    },
  },
  wrapper: {
    position: 'relative',
    display: 'grid',
    width: '100%',
    minHeight: 584,
    gridTemplateColumns: '0.896fr 1fr',
    gridTemplateRows: '1.14fr 0.47fr 0.47fr',
    gridGap: theme.spacing(6),

    [theme.breakpoints.down('lg-medium')]: {
      gridGap: theme.spacing(3),
    },
    [theme.breakpoints.down('lg')]: {
      gridColumnGap: 0,
    },

    [theme.breakpoints.down('sm-large')]: {
      display: 'block',
      '& > .MuiBox-root:not(:last-child)': {
        marginBottom: theme.spacing(3),
      },
    },
  },
  text: {
    position: 'relative',
    gridColumn: '1 /span 1',
    gridRow: '1 / span 1',
  },
  sliderSection: {
    position: 'relative',
    gridColumn: '1 /span 1',
    gridRow: '2 / span 2',

    [theme.breakpoints.down(1200)]: {
      gridColumn: '1 /span 2',
    },
  },
  slider: {
    width: '92.5%',
    margin: '0 auto',
    position: 'absolute',
    transform: 'translateX(-50%)',
    top: 43,
    left: '50%',
    zIndex: 2,

    [theme.breakpoints.down(1200)]: {
      width: 'calc(100% - 48px)',
    },

    [theme.breakpoints.down('sm-large')]: {
      position: 'relative',
      transform: 'unset',
      top: 'unset',
      left: 'unset',
      zIndex: 0,
    },
  },
  svgWrapper: {
    position: 'relative',
    gridColumn: '2 /span 3',
    gridRow: '1 / span 3',

    '& > .MuiBox-root': {
      width: '100%',
      position: 'absolute',

      '& > img': {
        width: '100%',
      },

      [theme.breakpoints.down(1200)]: {
        position: 'absolute',
        width: 500,
        top: 0,
        left: 64,
      },

      [theme.breakpoints.down('sm-large')]: {
        position: 'unset',
        width: '100%',

        '& > img': {
          width: '83%',
        },
      },
    },
  },
}))

const SmallSliderSection = () => {
  const classes = useStyles()
  const { navigate } = useNavigation('consultation-form')

  return (
    <React.Fragment>
      <GhostHeaderBox />
      <Box className={classes.root}>
        <Box className={classes.wrapper}>
          <Box className={classes.text}>
            <Box sx={{ position: 'relative' }}>
              <Box className={classes.fiveStarCardBox}>
                <FiveStarCard />
              </Box>
              <TextBlockWithHeader
                header="Our Services"
                subHeader="Inforce"
                className={classes.mainHeader}
              >
                We take care of every aspect of developing your product,
                enabling you to focus on the growth, impact, and scaling of your
                organization.
              </TextBlockWithHeader>
              <MButton variant="contained" color="primary" onClick={navigate}>
                Free consultation
              </MButton>
            </Box>
          </Box>
          <Box className={classes.svgWrapper}>
            <SvgContainer size="lg">
              <PImage src={links.shared.chartIcon.src} />
            </SvgContainer>
          </Box>
          <Box className={classes.sliderSection}>
            <Typography variant="subtitle1" mb={2}>
              Core Technologies:
            </Typography>
            <Box sx={{ width: '100%' }}>
              <Slider {...settings} className={classes.slider}>
                {ITEMS.map((item, idx) => (
                  <SliderItem key={idx} item={item} />
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default SmallSliderSection
