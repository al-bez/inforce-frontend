import React from 'react'
import { Link } from 'react-router-dom'
import { MButton } from '@atoms'
import { SectionWithSvgAndText } from '@templates'
import { IProject } from 'types/project'

interface IProjectsList {
  projects: IProject[]
}

const ProjectsList = ({ projects }: IProjectsList) => {
  return (
    <React.Fragment>
      {projects.map((project) => (
        <SectionWithSvgAndText key={project._id} project={project}>
          <Link to={`/casepage/${project._id}`}>
            <MButton color="primary" variant="contained">
              Explore Case
            </MButton>
          </Link>
        </SectionWithSvgAndText>
      ))}
    </React.Fragment>
  )
}

export default ProjectsList
