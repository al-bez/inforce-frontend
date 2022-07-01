import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { MTheme } from 'theme'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { height } from '@mui/system'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    zIndex: 1000,
  },
  cookieContainer: {
    position: 'relative',
    borderRadius: '8px',
    backgroundColor: '#212121',
    height: '11.4em',
    width: '24em',
    left: '8px',
    padding: '19px 30px',
    marginBottom: '13px',
    webkitBorderRadius: '8px',
    mozBorderRadius: '8px',
    msBorderRadius: '8px',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '17em',
      height: '10em',
      padding: '15px 20px',
    },
  },
  cookieHeader: {
    fontFamily: 'm-normal',
    letterSpacing: '0.08em',
    fontSize: '1.2em',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.0em',
    },
  },
  cookieBtn: {
    letterSpacing: '0.08em',

    padding: '6px 25px',
    backgroundColor: 'rgba(56, 78, 224, 1)',
    fontSize: '1.1em',
    marginTop: '20px',
    cursor: 'pointer',
    borderRadius: '10px',
    border: 'none',
    [theme.breakpoints.down('sm')]: {
      letterSpacing: '0.06em',
      fontSize: '0.9em',
    },
  },
  cookieP: {
    fontSize: '0.9em',
    color: 'rgba(189, 189, 189, 1)',
    fontWeight: '400',
    marginTop: '10px',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
  cookiePP: {
    color: 'rgb(75 98 255)',
  },
}))

function CookiePolicy() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CookieConsent
        disableStyles={true}
        buttonClasses={classes.cookieBtn}
        containerClasses={classes.cookieContainer}
        //   contentClasses="cookieContent"
        location="bottom"
        buttonText="I Agree"
        //   cookieName="mobiele-cookie"
        expires={31}
      >
        <span className={classes.cookieHeader}>Cookie?</span> <br />
        <span className={classes.cookieP}>
          By clicking Continue, you agree to our use of cookies. If you would
          like more information, read our{' '}
          <Link className={classes.cookiePP} to="/cookie">
            privacy policy
          </Link>
          .
        </span>
      </CookieConsent>
    </div>
  )
}

export default CookiePolicy
