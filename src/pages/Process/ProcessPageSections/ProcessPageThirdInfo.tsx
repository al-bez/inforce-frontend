import { makeStyles } from '@mui/styles'
import { Typography, Box } from '@mui/material'
import { MCard } from '@atoms'
import { TwoLinedAvatar, PaddingBox } from '@molecules'
import { SunEllipseIcon } from '../../../assets/icons'
import { YouNeedUsWithSvg } from '@templates'
import { MTheme } from 'theme'

const arrItems = [
  {
    primaryText: 'Dedicated team',
    secondaryText: '',
    id: 1,
  },
  {
    primaryText: 'Blended team',
    secondaryText: '',
    id: 2,
  },
  {
    primaryText: 'Managed team',
    secondaryText: '',
    id: 3,
  },
  {
    primaryText: 'Software solution',
    secondaryText: '',
    id: 4,
  },
]

const useStyles = makeStyles((theme: MTheme) => ({
  infoHeader: {
    width: '100%',
    padding: theme.spacing(0, 0, 5, 0),
    display: 'block',
    position: 'relative',
  },
  infoSection: {
    display: 'flex',
    paddingBottom: theme.spacing(12),
  },
  sectionCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
  },
  cardContainer: {
    justifyContent: 'start',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: `repeat(2, ${theme.spacing(12.875)})`,
    gridRowGap: theme.spacing(2),
    gridColumnGap: theme.spacing(3),

    [theme.breakpoints.down(1250)]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },

    [theme.breakpoints.down('md')]: {
      gridTemplateRows: `repeat(4, ${theme.spacing(12.875)})`,
    },
  },
  sectionInfoBlock: {
    width: '100%',
    marginLeft: theme.spacing(20.625),
  },
  smallTextBlock: {
    maxWidth: theme.spacing(60.375),
  },
}))

const ProcessPageThirdInfo = () => {
  const classes = useStyles()
  return (
    <PaddingBox>
      <Box className={classes.infoHeader}>
        <Typography variant="h2">YOU NEED US</Typography>
      </Box>
      <YouNeedUsWithSvg
        header="Dedicated team"
        secondaryText="A dedicated team is a way of extending your in-house team with hand-picked tech talent. You combine the cost-efficiency of nearshore teams and the quality associated with in-house teams."
        anotherText="You manage the day-to-day work, while Inforce provides a work environment that feels like home, with a personal approach that premiers personal growth and sustainability."
      >
        <Box className={classes.cardContainer}>
          {arrItems.map((item) => (
            <MCard key={item.id} sx={{ minWidth: 180 }}>
              <TwoLinedAvatar primaryText={item.primaryText}>
                <SunEllipseIcon />
              </TwoLinedAvatar>
            </MCard>
          ))}
        </Box>
      </YouNeedUsWithSvg>
    </PaddingBox>
  )
}

export default ProcessPageThirdInfo
