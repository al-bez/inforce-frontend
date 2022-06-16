import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { MCircularProgress } from '@atoms'
import { GhostHeaderBox } from '@molecules'
import { FormSection } from '@templates'
import { IProject } from 'types/project'
import { useTypedSelector, useActions } from 'hooks'
import CasePageFirstInfoBlock from './CasePageSections/CasePageFirstInfoBlock'
import CasePageSliderSection from './CasePageSections/CasePageSliderSection'
import CasePageSecondInfoBlock from './CasePageSections/CasePageSecondInfoBlock'

const CasePage = () => {
  const { id } = useParams<{ id: string }>()

  const { projects, currentProject } = useTypedSelector(
    (state) => state.projects
  )

  // change to pass object using router
  const { getProjectById, pickCurrentProject } = useActions()

  React.useEffect(() => {
    if (!currentProject && !projects.length) {
      getProjectById(id)
    } else {
      const project = projects.find((el: IProject) => el._id === id)
      pickCurrentProject(project as IProject)
    }
  }, [])

  return (
    <React.Fragment>
      <Helmet>
        <title>Inforce | Case</title>
        <meta name="description" content="inforce company" />
      </Helmet>
      {!currentProject ? (
        <>
          <GhostHeaderBox />
          <MCircularProgress />
        </>
      ) : (
        <>
          <CasePageFirstInfoBlock currentProject={currentProject} />
          <CasePageSliderSection currentProject={currentProject} />
        </>
      )}

      <CasePageSecondInfoBlock />
      <FormSection />
    </React.Fragment>
  )
}

export default CasePage
