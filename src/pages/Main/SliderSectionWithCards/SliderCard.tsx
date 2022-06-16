import { useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'
import { PImage } from '@molecules'
import { MTheme } from 'theme'
import { IProject } from 'types'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    maxWidth: theme.spacing(67.375),
    border: '1px solid transparent',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    marginRight: theme.spacing(2),
    width: 539,
    transition: 'border .5s ease',

    [theme.breakpoints.down(1200)]: {
      width: 340,
    },

    [theme.breakpoints.down(365)]: {
      width: 'auto',
    },

    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  imageContainer: {
    height: 279,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[300],
  },
  image: {
    height: '100%',
    objectFit: 'cover',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    '& .MuiTypography-root:first-child': {
      marginBottom: theme.spacing(2),
    },
  },
  textDots: {
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  header: {
    cursor: 'pointer',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      display: 'block',
      margin: 'auto',
      height: 3,
      width: 0,
      background: 'transparent',
      transition: 'width .5s ease, background-color 0.5s ease',
    },
    '&:hover:after': {
      width: '100%',
      background: theme.palette.primary.main,
    },
  },
}))

interface ISliderCard {
  item: IProject
}

const Slidercard = ({ item }: ISliderCard) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <Box className={classes.root}>
      <Box className={classes.imageContainer}>
        <PImage
          src={item.img_preview.src}
          placeholder={item.img_preview.src_pixel}
          className={classes.image}
        />
      </Box>

      <Box className={classes.textContainer}>
        <Typography
          variant="h4"
          className={classes.header}
          onClick={() => history.push(`/casepage/${item._id}`)}
        >
          {item.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.textDots}>
          {item.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default Slidercard
