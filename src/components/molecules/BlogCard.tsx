import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import ProgressiveImage from 'react-progressive-graceful-image'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    maxWidth: theme.spacing(49.75),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  imageWrapper: {
    width: '100%',
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: theme.spacing(1),
    },
  },
  date: {
    color: theme.palette.primary.main,
    margin: theme.spacing(2, 0, 1, 0),
  },
}))

export interface IDefaultCard {
  id: string
  title: string
  imageSrc: string
  createdAt: string
  text: string
}

interface IBlogCard {
  post: IDefaultCard
  imageHeight?: number
}

// {imageSrc, title, createdAt}, children
const BlogCard = ({ post, imageHeight = 231 }: IBlogCard): JSX.Element => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.imageWrapper} sx={{ height: imageHeight }}>
        {/* <ProgressiveImage
          src={require(`../assets/${post.imageSrc}.png`).default}
          placeholder={require(`../assets/${post.imageSrc}-pixel.png`).default}
        >
          {(src: string) => <img src={src} alt={post.title} />}
        </ProgressiveImage> */}
      </Box>
      <Typography variant="subtitle1" className={classes.date}>
        {post.createdAt}
      </Typography>
      <Typography variant="h3" sx={{ marginBottom: 0.5 }}>
        {post.title}
      </Typography>
      <Typography variant="subtitle1">{post.text}</Typography>
    </Box>
  )
}

export default BlogCard
