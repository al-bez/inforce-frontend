import { Box } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { MButton, MCircularProgress } from '@atoms'
import { TextBlockWithHeader, PaddingBox, GhostHeaderBox } from '@molecules'
import { FormSection } from '@templates'
import { useProjectsFetcher, useProjectsClear } from 'hooks'
import { MTheme } from 'theme'
import { StatusTypes } from 'types'
import ProjectList from './ProjectsList'

const PER_PAGE = 3

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    width: '100%',
    display: 'block',
    position: 'relative',

    paddingTop: theme.spacing(12),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
    },
  },
  mainHeader: {
    '& .MuiTypography-root:nth-child(2)': {
      fontSize: theme.spacing(6.25),
      marginBottom: theme.spacing(8.75),

      [theme.breakpoints.down('md-large')]: {
        marginBottom: theme.spacing(4),
      },
    },
  },
  outlinedButton: {
    [theme.breakpoints.down('xs-medium')]: {
      marginTop: theme.spacing(2),
    },
  },
  boxForLoadMore: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

const ResultsPage = () => {
  const classes = useStyles()
  const { status, projects } = useProjectsFetcher()
  const isProjectsLoading = status === StatusTypes.PENDING
  const [page, setPage] = useState(1)

  const handleClick = () => {
    setPage((prev) => prev + 1)
  }

  useProjectsClear()

  return (
    <React.Fragment>
      <Helmet>
        <title>Inforce | Result</title>
        <meta name="description" content="inforce company" />
      </Helmet>
      <PaddingBox>
        <GhostHeaderBox />
        <Box className={classes.root}>
          <TextBlockWithHeader
            header="Case Studies"
            subHeader="Inforce"
            className={classes.mainHeader}
          ></TextBlockWithHeader>
          {isProjectsLoading ? (
            <MCircularProgress />
          ) : (
            <>
              <ProjectList projects={projects.slice(0, page * PER_PAGE)} />
              <Box className={classes.boxForLoadMore}>
                {page * PER_PAGE < projects.length ? (
                  <MButton
                    color="primary"
                    variant="outlined"
                    className={classes.outlinedButton}
                    onClick={handleClick}
                  >
                    Load more
                  </MButton>
                ) : null}
              </Box>
            </>
          )}
        </Box>
      </PaddingBox>
      <FormSection />
    </React.Fragment>
  )
}

export default ResultsPage
