import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Helmet } from 'react-helmet-async'
import { MTheme } from 'theme'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBox: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(5),
    maxWidth: theme.spacing(91.875),
    display: 'block',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      maxWidth: theme.spacing(69.25),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2, 0, 2),
    },
  },
}))

const PrivacyPolicyView = () => {
  const classes = useStyles()

  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
        <meta name="description" content="inforce company" />
      </Helmet>
      <Box className={classes.root}>
        <Box className={classes.containerBox}>
          <Typography variant="h2" marginBottom={4}>
            Privacy Policy
          </Typography>
          <Typography variant="h4" marginBottom={3}>
            Policy
          </Typography>
          <Typography variant="h3" marginBottom={2}>
            Privacy and Personal Data Protection Policy (America, Europe,
            Ukraine)
          </Typography>
          <Typography variant="h3" marginBottom={1}>
            {t('privacyPolicy.fieldOfApplication.title')}
          </Typography>
          <Typography marginBottom={2}>
            {t('privacyPolicy.fieldOfApplication.desc')}
          </Typography>
          <Typography variant="h3" marginBottom={1}>
            {t('privacyPolicy.informationThatCompanyCollect.title')}
          </Typography>
          <Typography marginBottom={2}>
            {t('privacyPolicy.informationThatCompanyCollect.desc')}
          </Typography>
          <Typography variant="h3" marginBottom={1}>
            {t('privacyPolicy.ipAdressCoocies.title')}
          </Typography>
          <Typography marginBottom={2}>
            {t('privacyPolicy.ipAdressCoocies.desc')}
          </Typography>
          <Typography variant="h3" marginBottom={1}>
            {t('privacyPolicy.useOfPersonalData.title')}
          </Typography>
          <Typography marginBottom={2}>
            {t('privacyPolicy.useOfPersonalData.desc')}
          </Typography>
          <Typography variant="h3" marginBottom={1}>
            {t('privacyPolicy.exchangeOfInformation.title')}
          </Typography>
          <Typography marginBottom={2}>
            {t('privacyPolicy.exchangeOfInformation.desc')}
          </Typography>
          <Typography variant="h3" marginBottom={1}>
            {t('privacyPolicy.userControl.title')}
          </Typography>
          <Typography marginBottom={2}>
            {t('privacyPolicy.userControl.desc')}
          </Typography>
          <Typography variant="h3" marginBottom={1}>
            {t('privacyPolicy.security.title')}
          </Typography>
          <Typography marginBottom={2}>
            {t('privacyPolicy.security.desc')}
          </Typography>
          <Typography variant="h3" marginBottom={1}>
            {t('privacyPolicy.makingChanges.title')}
          </Typography>
          <Typography marginBottom={2}>
            {t('privacyPolicy.makingChanges.desc')}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default PrivacyPolicyView
