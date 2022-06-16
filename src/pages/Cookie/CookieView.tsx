import Box from '@mui/material/Box'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'
import {
  SvgContainer,
  TextBlockWithHeader,
  PaddingBox,
  GhostHeaderBox,
  PImage,
} from '@molecules'
import { MTheme } from 'theme'
import links from '../../assets/images'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    paddingBottom: theme.spacing(8),
    display: 'block',
    position: 'relative',
    paddingTop: theme.spacing(12),

    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.down('sm-large')]: {
      paddingBottom: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
    },
  },
  containerBox: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md-large')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      '& > .MuiBox-root': {
        width: '100%',
      },
    },
  },
  textBlock: {
    maxWidth: theme.spacing(84.875),
    paddingRight: theme.spacing(3),

    [theme.breakpoints.down('lg')]: {
      maxWidth: 607,
    },
    [theme.breakpoints.down('md-large')]: {
      marginTop: theme.spacing(12),
    },
    [theme.breakpoints.down('sm-large')]: {
      paddingRight: theme.spacing(0),
      maxWidth: '100%',
    },
    [theme.breakpoints.down('sm-large')]: {
      marginTop: theme.spacing(6),
    },
  },
  svgBlock: {
    flex: 1,
    '& > img': {
      width: '37vw',
    },
    [theme.breakpoints.down('lg')]: {
      '& > img': {
        width: '100%',
      },
    },
    [theme.breakpoints.down('lg-medium')]: {
      maxHeight: 392,
      '& > img': {
        width: '73%',
      },
    },
    [theme.breakpoints.down(1200)]: {
      '& > img': {
        width: '100%',
      },
    },
    [theme.breakpoints.down(1000)]: {
      '& > img': {
        width: '73%',
      },
    },
    [theme.breakpoints.down('xs-medium')]: {
      maxHeight: 190,
    },
  },
  mainHeader: {
    '& .MuiTypography-root:nth-child(2)': {
      fontSize: theme.spacing(6.25),
      [theme.breakpoints.down('sm-large')]: {
        fontSize: theme.spacing(5),
        lineHeight: theme.spacing(6),
      },
      [theme.breakpoints.down('xs-medium')]: {
        fontSize: theme.spacing(4.75),
      },
    },
  },
  subHeader: {
    '& .MuiTypography-root:nth-child(2)': {
      fontSize: theme.spacing(4),
      [theme.breakpoints.down('sm-large')]: {
        fontSize: theme.spacing(3.125),
        lineHeight: theme.spacing(4.6875),
      },
    },
  },
}))

const CockiesPage = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <Helmet>
        <title>Inforce | Cookie</title>
        <meta name="description" content="inforce company" />
      </Helmet>
      <PaddingBox>
        <GhostHeaderBox />
        <Box className={classes.root}>
          <Box className={classes.containerBox}>
            <SvgContainer size="lg" className={classes.svgBlock}>
              <PImage src={links.coockieView.cookie.src} />
            </SvgContainer>

            <Box className={classes.textBlock}>
              <TextBlockWithHeader
                header="Cookies Policy"
                subHeader="Legal"
                className={classes.mainHeader}
              >
                {t('cookie.s1p1')}
              </TextBlockWithHeader>
              <TextBlockWithHeader>{t('cookie.s1p2')}</TextBlockWithHeader>

              <TextBlockWithHeader
                header="What are cookies"
                className={classes.subHeader}
              >
                {t('cookie.s2p1')}
              </TextBlockWithHeader>
              <TextBlockWithHeader>{t('cookie.s2p2')}</TextBlockWithHeader>
              <TextBlockWithHeader
                header="How we uses cookies"
                className={classes.subHeader}
              >
                {t('cookie.s3p1')}
              </TextBlockWithHeader>
              <TextBlockWithHeader>{t('cookie.s3p2')}</TextBlockWithHeader>
            </Box>
          </Box>
        </Box>
      </PaddingBox>
    </React.Fragment>
  )
}

export default CockiesPage
