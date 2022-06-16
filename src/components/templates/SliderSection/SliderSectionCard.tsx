import clsx from 'clsx'
import { makeStyles } from '@mui/styles'
import { alpha } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { TwoLinedAvatar, PImage } from '@molecules'
import { MTheme } from 'theme'
import { IProject } from 'types/project'

const useStyles = makeStyles((theme: MTheme) => ({
  cardContainer: {
    position: 'relative',
    padding: theme.spacing(3, 10.125),
    textAlign: 'center',
    minHeight: 247,
    border: `1px solid ${alpha(theme.palette.grey[900], 0.15)}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    height: 'inherit',
    margin: theme.spacing(0, 3, 0, 3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      minHeight: theme.spacing(36.75),
      padding: theme.spacing(3, 6),
      margin: theme.spacing(0, 1, 0, 1),
    },
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0%',
    left: '50%',
    transform: 'translate(-50%, 66%)',

    '& > .MuiAvatar-root': {
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.grey[300],
      '& > img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
    '& > div > p.MuiTypography-root': {
      ...theme.typography.subtitle1,
      color: theme.palette.primary.main,
      marginTop: 0,
    },
  },
  speechmarks: {
    fontSize: theme.spacing(8.125),
    color: theme.palette.primary.main,
  },
  left: {
    position: 'absolute',
    top: 0,
    left: 16,
  },
  right: {
    position: 'absolute',
    bottom: 0,
    right: 16,
  },
}))

interface ISliderSectionCard {
  card: IProject
}

const SliderSectionCard = ({ card }: ISliderSectionCard) => {
  const classes = useStyles()

  return (
    <Box className={classes.cardContainer}>
      <Box className={clsx(classes.speechmarks, classes.left)}>“</Box>
      <Typography variant="subtitle1" mb={7.25}>
        {card.customer.review}
      </Typography>
      <TwoLinedAvatar
        primaryText={card.customer.name}
        secondaryText={card.title}
        className={classes.avatar}
        sx={{ width: 116, height: 116 }}
      >
        <PImage
          src={card.customer.avatar.src}
          placeholder={card.customer.avatar.src_pixel}
        />
      </TwoLinedAvatar>
      <Box className={clsx(classes.speechmarks, classes.right)}>“</Box>
    </Box>
  )
}

export default SliderSectionCard
