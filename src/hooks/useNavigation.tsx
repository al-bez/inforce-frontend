import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

// target -> id of HTML element navigate to
// locations? -> array of locations (['/dashboard', '/cookie' ...]) in case there is no "id" on current page
// defaultPathname? -> works with <locations> prop, navigate to another page if there is no "id" on current page
const useNavigation = (
  target: string,
  locations?: string[],
  defaultPathname = '/'
) => {
  const location = useLocation()
  const history = useHistory()
  const [pathname, setPathname] = React.useState<string>(location.pathname)

  useEffect(() => {
    if (locations && locations.includes(location.pathname)) {
      setPathname(defaultPathname)
    }
  }, [location, locations])

  return {
    navigate: () => history.push(`${pathname}#${target}`),
    location,
    history,
  }
}

export default useNavigation
