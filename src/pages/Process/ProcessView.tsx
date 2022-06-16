import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MCircularProgress } from '@atoms'
import { PaddingBox } from '@molecules'
import { FormSection, GoalSection, SliderSection } from '@templates'
import { useProjectsFetcher, useProjectsClear } from 'hooks'
import { StatusTypes } from 'types'
import ProcessPageSecondInfo from './ProcessPageSections/ProcessPageSecondInfo'
import ProcessPageThirdInfo from './ProcessPageSections/ProcessPageThirdInfo'
import QuoteSection from './ProcessPageSections/QuoteSection'
import ProcessPageMainSection from './ProcessPageSections/ProcessPageMainSection'
import ProcessPageInfoSection from './ProcessPageSections/ProcessPageInfoSection'

const ProcessPage = () => {
  const { status, projects } = useProjectsFetcher()
  const isProjectsLoading = status === StatusTypes.PENDING

  useProjectsClear()

  return (
    <React.Fragment>
      <Helmet>
        <title>Inforce | Process</title>
        <meta name="description" content="inforce company" />
      </Helmet>
      <ProcessPageMainSection />
      <QuoteSection />
      <ProcessPageInfoSection />
      <PaddingBox>
        <GoalSection />
      </PaddingBox>
      <ProcessPageSecondInfo />
      <ProcessPageThirdInfo />
      {isProjectsLoading ? (
        <MCircularProgress />
      ) : (
        <SliderSection cards={projects} />
      )}
      <FormSection />
    </React.Fragment>
  )
}
export default ProcessPage
