import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MCircularProgress } from '@atoms'
import { PaddingBox } from '@molecules'
import {
  GoalSection,
  SliderSection,
  YouNeedUsSection,
  FormSection,
} from '@templates'
import { useProjectsFetcher, useProjectsClear } from 'hooks'
import { StatusTypes } from 'types'
import PhotoSection from './AboutUsServices/PhotoSection'
import BigHeaderSection from './AboutUsServices/BigHeaderSection'
import MarketSuccess from './AboutUsServices/MarketSuccess'
import AboutUsFirstSection from './AboutUsServices/AboutUsFirstSection'
import AboutUsSecondSection from './AboutUsServices/AboutUsSecondSection'

const AboutUs = () => {
  const { status, projects } = useProjectsFetcher()
  const isProjectsLoading = status === StatusTypes.PENDING

  useProjectsClear()

  return (
    <React.Fragment>
      <Helmet>
        <title>Inforce | About us</title>
        <meta name="description" content="inforce company" />
      </Helmet>
      <AboutUsFirstSection />
      <PaddingBox>
        <AboutUsSecondSection />
        <PhotoSection />
        <BigHeaderSection />
      </PaddingBox>
      <YouNeedUsSection />
      <PaddingBox>
        <MarketSuccess />
        <GoalSection />
      </PaddingBox>
      {isProjectsLoading ? (
        <MCircularProgress />
      ) : (
        <SliderSection cards={projects} />
      )}
      <FormSection />
    </React.Fragment>
  )
}

export default AboutUs
