import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import { MButton } from '@atoms'
import { PImage } from '@molecules'
import { MTheme } from 'theme'
import { background } from '../../assets/base64'
import successRequest from '../../assets/images/succsessRequest.png'
import links from '../../assets/images'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    maxWidth: '100%',
    height: '100vh',
    background: ` url(${background})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBox: {
    maxWidth: theme.spacing(91.875),
    display: 'block',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      maxWidth: theme.spacing(69.25),
    },
  },
  descriptionBlock: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 8.25, 0, 8.25),
    color: theme.palette.primary.light,
    [theme.breakpoints.down('xs-medium')]: {
      padding: theme.spacing(0),
    },
  },
  textField: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs-medium')]: {
      padding: theme.spacing(0, 5, 0, 5),
    },
    textAlign: 'center',
  },
  imageWrapper: {
    margin: '15px auto',
    maxWidth: theme.spacing(30),
    maxHeight: theme.spacing(30),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
}))

const ThankYouView = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <>
      <Helmet>
        <title>Success</title>
        <meta name="description" content="inforce company" />
      </Helmet>
      <Box className={classes.root}>
        <Box className={classes.containerBox}>
          <Box className={classes.imageWrapper}>
            <PImage
              // upload to aws
              src={successRequest}
              placeholder={links.notFound.error404.src_pixel}
              className={classes.image}
            />
          </Box>
          <Box className={classes.descriptionBlock}>
            <Box>
              <Typography variant="h3">Thank you!</Typography>
            </Box>
            <Box className={classes.textField}>
              <Typography variant="subtitle1">
                Our company will contact you in a couple of days. Have a great
                day!
              </Typography>
            </Box>
            <Box>
              <MButton
                color="secondary"
                variant="contained"
                onClick={() => history.push('/')}
              >
                Back to main page
              </MButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ThankYouView
