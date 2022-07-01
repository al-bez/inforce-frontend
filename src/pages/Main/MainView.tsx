import React from 'react'
import { Helmet } from 'react-helmet-async'
import Jumbotron from './Jumbotron'
import InforceInfoSection from './InforceInfoSection'
import SliderSectionWithCards from './SliderSectionWithCards'
import {
  YouNeedUsSection,
  SliderSection,
  GoalSection,
  FormSection,
} from '@templates'
import { MCircularProgress } from '@atoms'
import { CookiePolicy, PaddingBox } from '@molecules'
import { useProjectsFetcher, useProjectsClear } from 'hooks'
import { StatusTypes } from 'types'

const MainView = () => {
  const { status, projects } = useProjectsFetcher()
  const isProjectsLoading = status === StatusTypes.PENDING

  useProjectsClear()

  // fix progressive spinner placement
  return (
    <React.Fragment>
      <Helmet>
        <title>Inforce</title>
      </Helmet>
      <Jumbotron />
      <InforceInfoSection />
      <PaddingBox>
        <GoalSection />
      </PaddingBox>
      {isProjectsLoading ? (
        <MCircularProgress />
      ) : (
        <SliderSectionWithCards items={projects} />
      )}
      <YouNeedUsSection />
      {isProjectsLoading ? (
        <MCircularProgress />
      ) : (
        <SliderSection cards={projects} />
      )}
      <FormSection />
      <CookiePolicy />
    </React.Fragment>
  )
}

export default MainView
