import React from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { MButton } from '@atoms'
import { TwoLinedAvatar, TextBlockWithHeader } from '@molecules'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    flex: 1,
  },
  cardsContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: theme.spacing(3),

    [theme.breakpoints.down('md-large')]: {
      marginTop: theme.spacing(1),
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridRowGap: theme.spacing(4),
    },
  },
  cardBox: {
    '&  .MuiBox-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',

      '& > .MuiAvatar-root': {
        marginBottom: theme.spacing(2),
      },
      '& > div > p.MuiTypography-root': { ...theme.typography.subtitle1 },
    },
    '& .MuiButton-root': {
      marginTop: theme.spacing(4),

      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  },
}))

interface ITextSectionCard {
  primaryText: string
  secondaryText: string
  buttonText?: string
  link?: string
  icon: React.ReactNode
}

interface ITextSection {
  subHeader: string
  header: string
  cards: ITextSectionCard[]
  children: React.ReactNode
}

const TextSection = ({ subHeader, header, cards, children }: ITextSection) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <TextBlockWithHeader header={header} subHeader={subHeader}>
        {children}
      </TextBlockWithHeader>
      <Box className={classes.cardsContainer}>
        {cards.map((card, idx) => (
          <Box key={idx} className={classes.cardBox}>
            <TwoLinedAvatar
              primaryText={card.primaryText}
              secondaryText={card.secondaryText}
            >
              {card.icon}
            </TwoLinedAvatar>
            {card.buttonText ? (
              <Link to={`${card.link}`}>
                <MButton color="primary" variant="contained">
                  {card.buttonText}
                </MButton>
              </Link>
            ) : null}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TextSection
