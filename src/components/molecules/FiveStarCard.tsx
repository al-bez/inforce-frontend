import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { StarIcon } from '../../assets/icons'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  card: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadiusMd,
    padding: theme.spacing(2),
    boxShadow: theme.shadows[3],
    animationFillMode: 'backwards',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    '& > svg:not(:last-child)': {
      marginRight: theme.spacing(0.5),
    },
  },
}))

const FiveStarCard = (): JSX.Element => {
  const classes = useStyles()
  return (
    <Box className={classes.card}>
      <Typography variant="subtitle2" fontWeight={700}>
        We guarantee a successful project
      </Typography>
      <Typography variant="body1" marginBottom={1} marginTop={2}>
        5 years on the market of Internet solutions. Mobile development is our
        core specialization
      </Typography>
      <Box className={classes.rating}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </Box>
    </Box>
  )
}
export default FiveStarCard
