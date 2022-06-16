import React from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
import { MButton } from '@atoms'
import { PImage } from '@molecules'
import { MTheme } from 'theme'
import { background } from '../../assets/base64'
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
  },
  image: {
    width: '100%',
    height: '100%',
  },
}))

const Template404 = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <React.Fragment>
      <Helmet>
        <title>404</title>
        <meta name="description" content="inforce company" />
      </Helmet>
      <Box className={classes.root}>
        <Box className={classes.containerBox}>
          <Box>
            <PImage
              src={links.notFound.error404.src}
              placeholder={links.notFound.error404.src_pixel}
              className={classes.image}
            />
          </Box>
          <Box className={classes.descriptionBlock}>
            <Box>
              <Typography variant="h3">We are sorry,</Typography>
            </Box>
            <Box className={classes.textField}>
              <Typography variant="subtitle1">
                But the page you where looking for can`t be found
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
    </React.Fragment>
  )
}
export default Template404
