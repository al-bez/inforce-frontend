import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import { MButton } from '@atoms'
import { TextBlockWithHeader, MCardWithAction, PaddingBox } from '@molecules'
import { MobileSwipe } from '@organisms'
import { useNavigation } from 'hooks'
import { MTheme } from 'theme'
import { IActionCard } from 'types'

const useStyles = makeStyles((theme: MTheme) => ({
  wrapper: {
    margin: theme.spacing(12, 'auto'),
    [theme.breakpoints.down('lg')]: {
      margin: theme.spacing(8, 'auto'),
    },

    [theme.breakpoints.down('md-large')]: {
      flexDirection: 'column',
      alignItems: 'start',
    },
    [theme.breakpoints.down('sm-large')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      margin: theme.spacing(6, 'auto'),
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    owerflow: 'scroll',

    '& > .MuiButton-root': {
      padding: theme.spacing(2, 6.625),
    },
  },
  align: {
    alignItems: 'center',
    '& .MuiTypography-root': {
      marginBottom: theme.spacing(2),
    },
  },
  parentContainer: {
    owerflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  cardContainer: {
    padding: theme.spacing(1),
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(239px, 290px))',
    gridColumnGap: theme.spacing(6),
    overflow: 'scroll',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
    },

    [theme.breakpoints.down('md-large')]: {
      gridTemplateColumns: 'repeat(4, 280px)',
    },
  },
}))

const createDefaultCards = (size: number): IActionCard[] => {
  const cards = []
  const { t } = useTranslation()

  for (let i = 0; i < size; i++) {
    cards[i] = {
      id: uuidv4(),
      header: '0' + `${i + 1}`,
      text: t('cards.fourpack.' + `${i + 1}`),
      btnText: 'Learn more',
    }
  }

  return cards
}

interface YouNeedUsSectionProps {
  cards?: IActionCard[]
}

export const YouNeedUsSection = ({
  cards = createDefaultCards(4),
}: YouNeedUsSectionProps) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:1240px)')
  const { navigate } = useNavigation('consultation-form')

  return (
    <PaddingBox>
      <Box className={classes.wrapper}>
        <Box className={classes.root}>
          <TextBlockWithHeader
            header="you need us"
            subHeader="we are inforce"
            className={classes.align}
          />
        </Box>
        <Box className={classes.parentContainer}>
          <Box className={classes.cardContainer}>
            {cards.map((card) => (
              <MCardWithAction key={card.id} card={card} />
            ))}
          </Box>
          <MobileSwipe isMobile={matches} />
        </Box>
        <Box className={classes.root}>
          <MButton color="primary" variant="contained" onClick={navigate}>
            Free consultation
          </MButton>
        </Box>
      </Box>
    </PaddingBox>
  )
}

export default YouNeedUsSection
