import React from 'react'
import { makeStyles } from '@mui/styles'
import { SvgContainer, TextBlockWithHeader, PImage } from '@molecules'
import { Box, Typography } from '@mui/material'
import { MTheme } from 'theme'
import links from '../../assets/images'

const useStyles = makeStyles((theme: MTheme) => ({
  infoSection: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(12),

    '& > .MuiBox-root:not(:last-child)': {
      marginRight: theme.spacing(3),
    },

    [theme.breakpoints.down('lg')]: {
      paddingBottom: theme.spacing(8),
    },

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      paddingBottom: theme.spacing(1),
    },
  },
  block: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md-large')]: {
      width: '33.3%',
    },
  },
  smallSvg: {
    width: '25%',
    [theme.breakpoints.down('md-large')]: {
      display: 'none',
    },
  },
  image: {
    '& > img': {
      width: '180%',
      maxWidth: 'none',
    },
  },
  anotherSectionSpacing: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
}))

interface IYouNeedUsWithSvg {
  header: string
  secondaryText: string
  anotherText: string
  children: React.ReactNode
}

const YouNeedUsWithSvg = ({
  children,
  header,
  secondaryText,
  anotherText,
}: Partial<IYouNeedUsWithSvg>) => {
  const classes = useStyles()
  return (
    <Box className={classes.infoSection}>
      <Box className={classes.block}>{children}</Box>
      <Box className={classes.block}>
        <TextBlockWithHeader header={header}>
          {secondaryText}
          <Typography
            component="p"
            variant="subtitle2"
            className={classes.anotherSectionSpacing}
          >
            {anotherText}
          </Typography>
        </TextBlockWithHeader>
      </Box>
      <Box className={classes.smallSvg}>
        <SvgContainer className={classes.image} size="sm">
          <PImage src={links.shared.labIconSmall.src} />
        </SvgContainer>
      </Box>
    </Box>
  )
}

export default YouNeedUsWithSvg
