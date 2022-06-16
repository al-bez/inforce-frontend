import Slider, { CustomArrowProps } from 'react-slick'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import { TextBlockWithHeader } from '@molecules'
import { Icon } from '@iconify/react'
import PrevIcon from '@iconify-icons/eva/arrow-ios-back-fill'
import NextIcon from '@iconify-icons/eva/arrow-ios-forward-fill'
import ItemsForSlider from './ItemsForSlider'
import { MTheme } from 'theme'
import { IProject } from 'types/project'

const useStyles = makeStyles((theme: MTheme) => ({
  blockWithSlider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(10),

    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
    },
  },
  sliderContainer: {
    width: '100%',
    paddingBottom: theme.spacing(12),
    overflow: 'hidden',

    '& .slick-list': {
      [theme.breakpoints.down(1200)]: {
        maxHeight: 412,
      },
      [theme.breakpoints.down(936)]: {
        maxHeight: 300,
      },
      [theme.breakpoints.down(670)]: {
        maxHeight: 174,
      },
    },
    '& .slick-dots': {
      position: 'relative',
      bottom: 'unset',
      marginTop: theme.spacing(3),

      [theme.breakpoints.down('sm-large')]: {
        marginTop: theme.spacing(2),
      },
      '& li.slick-active button:before': {
        color: theme.palette.primary.main,
        opacity: 1,
      },

      '& .slick-dots li button:before': {
        color: theme.palette.primary.main,
      },
    },
  },
  arrow: {
    position: 'absolute',
    width: 48,
    height: 48,
    zIndex: 10,
    background: theme.palette.primary.main,
    borderRadius: 100,
    top: 'calc(50% - 49.2px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    [theme.breakpoints.down('sm-large')]: {
      top: 'calc(50% - 41.2px)',
    },
  },
}))

//------------------------------------------

function SampleNextArrow(props: CustomArrowProps) {
  const { arrow } = useStyles()
  const { onClick } = props
  return (
    <Box
      className={arrow}
      onClick={onClick}
      sx={{
        right: {
          xs: '2vw',
          lg: '10vw',
          'lg-medium': '23vw',
        },
      }}
    >
      <Icon icon={NextIcon} color="white" width={24} height={24} />
    </Box>
  )
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { arrow } = useStyles()
  const { onClick } = props
  return (
    <Box
      className={arrow}
      onClick={onClick}
      sx={{
        left: {
          xs: '2vw',
          lg: '10vw',
          'lg-medium': '23vw',
        },
      }}
    >
      <Icon icon={PrevIcon} color="white" width={24} height={24} />
    </Box>
  )
}

const settings = {
  className: 'center',
  centerMode: true,
  slidesToShow: 1,
  speed: 500,
  variableWidth: true,
  arrows: true,
  dots: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
}

interface ICasePageSliderSection {
  currentProject: IProject
}

const CasePageSliderSection = ({ currentProject }: ICasePageSliderSection) => {
  const classes = useStyles()
  return (
    <Box className={classes.blockWithSlider}>
      <Box>
        <TextBlockWithHeader header="GALLERY"></TextBlockWithHeader>
      </Box>
      <Box className={classes.sliderContainer}>
        <Slider {...settings}>
          {currentProject.imgs.map((item, idx) => (
            <ItemsForSlider key={idx} id={currentProject._id} item={item} />
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default CasePageSliderSection
