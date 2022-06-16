import { routes } from '../DashboardLayout/routes'
import { THeaderType } from '../Header'

export const headerColorExtension = (pathname: string): THeaderType => {
  const splittedPathname = pathname.split('|')
  const dynamicRoutes = routes.map((item) => (item.primary ? null : item.path))
  const trigger = dynamicRoutes.find((route) =>
    route?.match(splittedPathname[0])
  )

  return !trigger || pathname === '/' ? 'secondary' : 'primary'
}

export const footerRenderExtension = (pathname: string): boolean => {
  return routes.find((item) => item.path?.match(pathname)) ? true : false
}
