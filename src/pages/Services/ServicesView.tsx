import React from 'react'
import { Helmet } from 'react-helmet-async'
import { PaddingBox } from '@molecules'
import { FormSection, GoalSection } from '@templates'
import SmallSliderSection from './ServicesSections/SmallSliderSection'
import CardsSection from './ServicesSections/CardsSection'
import FirstInfoSection from './ServicesSections/FirstInfoSection'
import SecondInfoSection from './ServicesSections/SecondInfoSection'

const ServicesPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Inforce | Services</title>
        <meta name="description" content="inforce company" />
      </Helmet>
      <PaddingBox>
        <SmallSliderSection />
        <CardsSection />
        <FirstInfoSection />
        <GoalSection />
        <SecondInfoSection />
      </PaddingBox>
      <FormSection />
    </React.Fragment>
  )
}
export default ServicesPage
