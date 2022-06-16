import { useEffect } from 'react'
import { useActions, useTypedSelector } from '.'
import { StatusTypes } from 'types'

const useProjectsFetcher = () => {
  const { status, projects } = useTypedSelector((state) => state.projects)

  const { getProjectsRange } = useActions()

  useEffect(() => {
    if (status === StatusTypes.IDLE) {
      getProjectsRange()
    }
  }, [getProjectsRange, status])

  return { status, projects }
}

export default useProjectsFetcher
