import { useEffect } from 'react'
import { useActions } from '.'

const useProjectsClear = () => {
  const { projectsClear } = useActions()

  useEffect(() => {
    return () => {
      projectsClear()
    }
  }, [])
}

export default useProjectsClear
