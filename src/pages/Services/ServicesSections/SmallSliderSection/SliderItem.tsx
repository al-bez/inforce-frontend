import { makeStyles } from '@mui/styles'
import { Typography, Box } from '@mui/material'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 100,
    margin: theme.spacing(0, 4),
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}))

interface ISliderIcon {
  imageSrc: string
  description: string
}

interface IIconsForSlider {
  item: ISliderIcon
}

const IconsForSlider = ({ item }: IIconsForSlider) => {
  const classes = useStyles()
  // make image lazy load
  return (
    <Box className={classes.root}>
      <Box sx={{ width: 100, height: 98 }}>
        <img src={item.imageSrc} alt="" className={classes.image} />
      </Box>
      <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
        {item.description}
      </Typography>
    </Box>
  )
}

export default IconsForSlider
