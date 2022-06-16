import { useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { scrollToDestination } from '../utils/scrollDestination'

const IdNavigator = ({ location }: RouteComponentProps) => {
  useEffect(() => {
    if (location) {
      const element = document.getElementById(
        location.hash.split('#').pop() as string
      )

      setTimeout(() => {
        scrollToDestination(element)
      }, 100)
    }
  }, [location])

  return null
}

export default withRouter(IdNavigator)
