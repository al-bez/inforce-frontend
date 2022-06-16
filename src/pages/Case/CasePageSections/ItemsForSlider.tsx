import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { PImage } from '@molecules'
import { MTheme } from 'theme'
import { IImage } from 'types/project'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    border: '1px solid transparent',
    transition: 'all 0.4s ease',
    overflow: 'hidden',
    marginRight: theme.spacing(1.5),
    marginLeft: theme.spacing(1.5),
    width: 820,
    height: 412,
    backgroundColor: theme.palette.grey[300],
    borderRadius: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down(936)]: {
      width: 598,
      height: 300,
    },
    [theme.breakpoints.down(670)]: {
      width: 300,
      height: 174,
    },
    [theme.breakpoints.down('sm-large')]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5),
    },
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}))

interface IItemsForSlider {
  item: IImage
  id: string
}

const ItemsForSlider = ({ item }: IItemsForSlider) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <PImage
        src={item.src}
        placeholder={item.src_pixel}
        className={classes.image}
      />
    </Box>
  )
}

export default ItemsForSlider
