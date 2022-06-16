import { Route, Switch } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Dashboard from './layouts/DashboardLayout'
import { ErrorFallback } from '@organisms' // move to template
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeConfig } from './theme'
import { NotistackProvider } from './providers'

function App() {
  return (
    <ThemeConfig>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <NotistackProvider>
            <Switch>
              <Route path="/" component={Dashboard} />
            </Switch>
          </NotistackProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </ThemeConfig>
  )
}

export default App
