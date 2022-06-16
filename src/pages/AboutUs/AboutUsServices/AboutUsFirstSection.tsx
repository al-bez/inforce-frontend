import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { MButton } from '@atoms'
import { PaddingBox, TextBlockWithHeader } from '@molecules'
import { useNavigation } from 'hooks'
import { useTranslation } from 'react-i18next'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(25, 0, 16, 0),
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockText: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    maxWidth: theme.spacing(80.625),
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
}))

const AboutUsFirstSection = () => {
  const classes = useStyles()
  const { navigate } = useNavigation('consultation-form')
  const { t } = useTranslation()

  return (
    <PaddingBox full>
      <Box className={classes.root}>
        <Box className={classes.info}>
          <TextBlockWithHeader
            variant="h1"
            header="About Us"
            color="light"
            className={classes.blockText}
          >
            {t('about.description')}
          </TextBlockWithHeader>
          <MButton color="secondary" variant="contained" onClick={navigate}>
            Free consultation
          </MButton>
        </Box>
      </Box>
    </PaddingBox>
  )
}

export default AboutUsFirstSection
