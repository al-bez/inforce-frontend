import { Box } from '@mui/material'
import { SvgContainer, TextBlockWithHeader, PImage } from '@molecules'
import { IconWithAction } from '@organisms'
import { makeStyles } from '@mui/styles'
import { MTheme } from 'theme'
import { IProject } from 'types/project'
import React from 'react'

const useStyles = makeStyles((theme: MTheme) => ({
  sectionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(12),
    '&:not(:first-child)': {
      marginTop: theme.spacing(12),
    },
    [theme.breakpoints.down('lg')]: {
      '&:not(:first-child)': {
        marginTop: theme.spacing(8),
      },
      marginBottom: theme.spacing(8),
    },
    [theme.breakpoints.down('md-large')]: {
      display: 'block',
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:first-child)': {
        marginTop: theme.spacing(6),
      },
      marginBottom: theme.spacing(6),
    },
  },
  image: {
    flex: 1,

    '& > img': {
      width: 'auto',
      minWidth: '60%',

      [theme.breakpoints.down('lg')]: {
        width: '30vw',
        minWidth: 'unset',
      },
      [theme.breakpoints.down('md-large')]: {
        width: '40vw',
      },
      [theme.breakpoints.down('sm-large')]: {
        width: '50vw',
      },
      [theme.breakpoints.down('sm')]: {
        width: '60vw',
      },
    },
  },
  textBlockContainer: {
    maxWidth: theme.spacing(67.375),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down('lg')]: {
      maxWidth: theme.spacing(75.875),
    },
    [theme.breakpoints.down('md-large')]: {
      maxWidth: theme.spacing(110),
    },
    [theme.breakpoints.down('sm-large')]: {
      maxWidth: theme.spacing(88),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.down('xs-medium')]: {},
  },
  subHeader: {
    '& .MuiTypography-root:nth-child(2)': {
      fontSize: theme.spacing(4),
    },
  },
}))
interface ISectionWithSvgAndText {
  project: IProject
  children?: React.ReactNode
}

// shows SvgContainer with Image, somes text and takes children to pass it later (in our case buttons)
const SectionWithSvgAndText = ({
  project,
  children, // buttons
}: ISectionWithSvgAndText) => {
  const classes = useStyles()
  const { title, description, img_preview, customer } = project

  return (
    <React.Fragment>
      <Box className={classes.sectionContainer}>
        <Box className={classes.textBlockContainer}>
          <TextBlockWithHeader
            header={title}
            subHeader={'Inforce'}
            className={classes.subHeader}
          >
            {description}
          </TextBlockWithHeader>
          <IconWithAction header="Customer:" logo={customer.logo}>
            {children}
          </IconWithAction>
        </Box>
        <SvgContainer size="lg" className={classes.image}>
          <PImage src={img_preview.src} />
        </SvgContainer>
      </Box>
    </React.Fragment>
  )
}

export default SectionWithSvgAndText
