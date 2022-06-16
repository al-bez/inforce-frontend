import React from 'react'
import { Box, Grid } from '@mui/material'
import { SvgContainer, TextBlockWithHeader, PImage } from '@molecules'
import { useStyles } from './GridStyles'
import links from '../../../assets/images'

const SecondInfoSection = () => {
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
            <TextBlockWithHeader header="UX Research" subHeader="SERVICES">
              Test your assumptions and gather data. Goji Labs will first
              conduct a UX audit of any existing product and map out the
              existing information architecture. Then we’ll begin primary
              research to gain a deeper understanding of your customers, their
              motivations, and their pain points. Qualitative and quantitative
              analysis, performed through interviews, virtual workshops, and
              analytics review, will help us understand user behavior. From
              this, we establish a set of personas and user journeys for your
              different audiences which will inform our designs.
            </TextBlockWithHeader>
          </Grid>
          <Grid item md-large={6.5} lg-medium={6} xs={12}>
            <SvgContainer>
              <PImage src={links.servicesView.computerPages.src} />
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
            <TextBlockWithHeader header="UX & UI Design" subHeader="SERVICES">
              We care deeply about the experience of our end-users, and so
              should you. Great UX/UI design will align the user’s goals with
              yours, increase conversion, and help foster an emotional
              connection with your product and brand. We help you build better
              products, increase user adoption and retention, strengthen
              engagement, and boost productivity.
            </TextBlockWithHeader>
          </Grid>
          <Grid item md-large={6.5} lg-medium={6} xs={12}>
            <SvgContainer>
              <PImage src={links.servicesView.phoneGroup.src} />
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
            <TextBlockWithHeader header="UX Research" subHeader="SERVICES">
              Test your assumptions and gather data. Goji Labs will first
              conduct a UX audit of any existing product and map out the
              existing information architecture. Then we’ll begin primary
              research to gain a deeper understanding of your customers, their
              motivations, and their pain points. Qualitative and quantitative
              analysis, performed through interviews, virtual workshops, and
              analytics review, will help us understand user behavior. From
              this, we establish a set of personas and user journeys for your
              different audiences which will inform our designs.
            </TextBlockWithHeader>
          </Grid>
          <Grid item md-large={6.5} lg-medium={6} xs={12}>
            <SvgContainer>
              <PImage src={links.servicesView.computerGroup.src} />
            </SvgContainer>
          </Grid>
        </Box>
      </React.Fragment>
    </div>
  )
}
export default SecondInfoSection
