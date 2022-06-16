import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MButton } from '@atoms'
import { WrapperWithBorder, SvgContainer } from '@molecules'
import { PanelIcon } from '../../assets/icons'
import { useNavigation } from 'hooks'
import { MTheme } from 'theme'

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    maxWidth: theme.spacing(102.5),
    marginRight: theme.spacing(8),

    '& .MuiButton-root': {
      marginTop: theme.spacing(4),
      padding: theme.spacing(2, 6.625),
    },
  },
  svgPosition: {
    [theme.breakpoints.down('md-large')]: {
      display: 'none',
    },
  },
}))

const GoalSection = (): JSX.Element => {
  const classes = useStyles()
  const { navigate } = useNavigation('consultation-form')

  return (
    <WrapperWithBorder
      sx={{
        margin: (theme) => `0 auto ${theme.spacing(12)} auto`,
        maxWidth: 1269,
      }}
    >
      <Box className={classes.root}>
        <Typography variant="h2" fontWeight={400}>
          take the next step toward your personal and professional goals with
          Inforce
        </Typography>
        <MButton color="primary" variant="contained" onClick={navigate}>
          Free consultation
        </MButton>
      </Box>
      <SvgContainer className={classes.svgPosition} size="xs">
        <PanelIcon />
      </SvgContainer>
    </WrapperWithBorder>
  )
}

export default GoalSection
