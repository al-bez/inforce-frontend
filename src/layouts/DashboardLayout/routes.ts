import MainView from '../../pages/Main/MainView'
import Error404 from '../../pages/404/404View'
import Cookie from '../../pages/Cookie/CookieView'
import Result from '../../pages/Result/ResultView'
import Case from '../../pages/Case/CaseView'
import Services from '../../pages/Services/ServicesView'
import Process from '../../pages/Process/ProcessView'
import AboutUs from '../../pages/AboutUs/AboutUsView'
import ThankYou from '../../pages/ThankYou/ThankYouView'
export const routes = [
  {
    path: '/',
    exact: true,
    component: MainView,
    primary: true,
  },
  {
    path: '/cookie',
    component: Cookie,
  },
  {
    path: '/casepage/:id',
    component: Case,
  },
  {
    path: '/(results|casepage)/',
    component: Result,
  },
  {
    path: '/services',
    component: Services,
  },
  {
    path: '/process',
    component: Process,
  },
  {
    path: '/about-us',
    component: AboutUs,
    primary: true,
  },
  {
    path: '/thank-you',
    component: ThankYou,
  },
  {
    path: '',
    component: Error404,
    primary: true,
  },
]
