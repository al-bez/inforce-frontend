import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { SvgContainer, PaddingBox, PImage } from '@molecules'
import { CustomDonut } from '@organisms'
import { VideoSection } from '@templates'
import TextSection from './TextSection'
import { MTheme } from 'theme'
// assets
import { RocketIcon, MobileIcon } from '../../../assets/icons'
import links from '../../../assets/images'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    gridRowGap: theme.spacing(12),
    marginBottom: theme.spacing(12),

    '& > .MuiGrid-root:nth-child(2)': {
      order: 0,
      [theme.breakpoints.down('md-large')]: {
        order: -1,
      },
    },

    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(8),
      gridRowGap: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
      gridRowGap: theme.spacing(6),
    },
  },
}))

const InforceInfoSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const CARDS1 = [
    {
      primaryText: 'fast',
      secondaryText: t('main.strategy.fast'),
      buttonText: 'What we do?',
      link: '/about-us',
      icon: <RocketIcon />,
    },
    {
      primaryText: 'Reliable',
      secondaryText: t('main.strategy.reliable'),
      icon: <MobileIcon />,
    },
  ]

  const CARDS2 = [
    {
      primaryText: 'Scalable',
      secondaryText: t('main.strategy.scalable'),
      buttonText: 'Full process',
      link: '/process',
      icon: <RocketIcon />,
    },
    {
      primaryText: 'User-friendly',
      secondaryText: t('main.strategy.friendly'),
      icon: <MobileIcon />,
    },
  ]

  return (
    <PaddingBox>
      <VideoSection />
      <Grid
        container
        columnSpacing={3}
        alignItems="center"
        className={classes.root}
      >
        {/* Schedule chart */}
        <Grid item xs={12} md-large={6} lg={7}>
          <SvgContainer>
            <PImage src={links.shared.chartIcon.src} />
          </SvgContainer>
        </Grid>
        {/* Text for schedule block */}
        <Grid item xs={12} md-large={6} lg={5}>
          <TextSection
            header="Strategy, Design, & App Development"
            subHeader="services"
            cards={CARDS1}
          >
            Inforce turns your business idea into a launched product by guiding
            your journey & customizing the development to meet your goals.
            Whether you require a SaaS platform, social networking mobile
            application, an internal dashboard, or a sleek digital experience to
            engage with your audience — we’ve got you covered.
          </TextSection>
        </Grid>
        {/* Text for donut */}
        <Grid item xs={12} md-large={6} lg={5}>
          <TextSection
            header="WE'LL MAKE IT GO LIVE FAST!"
            subHeader="The Inforce process"
            cards={CARDS2}
          >
            Our client relationships go beyond technology. We get to know your
            vision and implement solutions in the most efficent way with a
            relevant technological stack. Our delivery is reliable,
            future-proof, easy-to-support & easy-to-scale.
          </TextSection>
        </Grid>
        {/* Donut rechart */}
        <Grid item xs={12} md-large={6} lg={7}>
          <SvgContainer sx={{ height: 416, marginLeft: 'auto' }}>
            <CustomDonut />
          </SvgContainer>
        </Grid>
      </Grid>
    </PaddingBox>
  )
}

export default InforceInfoSection
