import React from 'react'
import { Box, Grid } from '@mui/material'
import { SvgContainer, TextBlockWithHeader, PImage } from '@molecules'
import { useStyles } from './GridStyles'
import links from '../../../assets/images'

const FirstInfoSection = () => {
  const classes = useStyles()
  return (
    <div>
      {/* Main Info Block */}
      <React.Fragment>
        {/* 1 of 3 inso block */}
        <Box className={classes.block}>
          <Grid
            item
            md-large={5}
            lg-medium={5}
            xs={12}
            className={classes.textContainer}
          >
            <TextBlockWithHeader
              header="App Development & Testing"
              subHeader="SERVICES"
            >
              Technology is at the core of our app development services. We are
              experts in a variety of web, mobile, and IoT languages and
              frameworks. We are not in the business of building prototypes; we
              aim to lay the technical foundation of your company. We take great
              care to match our technical approach to your vision and develop
              scalable and maintainable codebases. We are obsessed with code
              quality and prefer to engineer a robust testing suite for every
              web and mobile application we build. Testing and quality assurance
              are an integral part of our process. Testing our work is not your
              job; it’s our job.
            </TextBlockWithHeader>
          </Grid>
          <Grid item md-large={6.5} lg-medium={6} xs={12}>
            <SvgContainer>
              <PImage src={links.shared.phonesPair.src} />
            </SvgContainer>
          </Grid>
        </Box>
        {/* 2 of 3 info block */}
        <Box className={classes.block}>
          <Grid
            item
            md-large={5}
            lg-medium={5}
            xs={12}
            className={classes.textContainer}
          >
            <TextBlockWithHeader
              header="Website Development & Design"
              subHeader="SERVICES"
            >
              How you tell your story matters. Whether you are a brand looking
              to increase sales, or a nonprofit trying to grow your impact, you
              need a strong online presence that boosts engagement, conversions,
              and revenue. Our web design and development team is here to
              promote your business and spread your message to broader
              audiences.
            </TextBlockWithHeader>
          </Grid>
          <Grid item md-large={6.5} lg-medium={6} xs={12}>
            <SvgContainer>
              <PImage src={links.servicesView.designIcon.src} />
            </SvgContainer>
          </Grid>
        </Box>
        {/* 3 of 3 info block */}
        <Box className={classes.block}>
          <Grid
            item
            md-large={5}
            lg-medium={5}
            xs={12}
            className={classes.textContainer}
          >
            <TextBlockWithHeader
              header="Custom Software Development"
              subHeader="SERVICES"
            >
              When you think of software development, what comes to mind? Goji
              Labs thinks of designing customized software solutions that are
              tailored to the various business problems our clients present us
              with. We find the technical issues specific to your business idea,
              perform a thorough analysis in order to find solutions, and
              execute through a transparent, collaborative process. The final
              product is a piece of software that will address your business
              needs efficiently and elegantly.
            </TextBlockWithHeader>
          </Grid>
          <Grid item md-large={6.5} lg-medium={6} xs={12}>
            <SvgContainer
              placeholder={links.servicesView.computerIcon.src_pixel}
            >
              <PImage src={links.servicesView.computerIcon.src} />
            </SvgContainer>
          </Grid>
        </Box>
      </React.Fragment>
    </div>
  )
}
export default FirstInfoSection
