import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { YouNeedUsWithSvg } from '@templates'
import { MTheme } from 'theme'

import CardItem from './CardItem'

const useStyles = makeStyles((theme: MTheme) => ({
  cardContainer: {
    display: 'block',

    '& > .MuiCard-root:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },

    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  infoHeader: {
    width: '100%',
    marginTop: theme.spacing(12),
    paddingBottom: theme.spacing(5),
    display: 'block',
    position: 'relative',

    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
      paddingBottom: theme.spacing(3),
    },
  },
}))
// ---------------------------

export interface ICardItem {
  primaryText: string
  secondaryText: string
  id: string
}

const CardsSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const CARD_ITEMS = [
    {
      primaryText: 'Philosophy',
      secondaryText: t('cards.threepack.1'),
      id: '1a',
    },
    {
      primaryText: 'Product Consulting & Strategy',
      secondaryText: t('cards.threepack.2'),
      id: '2b',
    },
    {
      primaryText: 'Project Rescue',
      secondaryText: t('cards.threepack.3'),
      id: '3c',
    },
  ]

  return (
    <React.Fragment>
      <Box className={classes.infoHeader} paddingBottom={5}>
        <Typography variant="h2">YOU NEED US</Typography>
      </Box>
      <YouNeedUsWithSvg
        header="Philosophy"
        secondaryText="We offer a scalable, robust suite of web and mobile app
              development services to help you get your project going and build
              your business. We leverage a wide array of technologies to develop
              web and mobile applications, design digital experiences that
              delight, and rescue projects that have stalled out. Whatever your
              needs, our process will help to propel your mission forward
              through digital innovation."
      >
        <Box className={classes.cardContainer}>
          {CARD_ITEMS.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </Box>
      </YouNeedUsWithSvg>
    </React.Fragment>
  )
}

export default CardsSection
