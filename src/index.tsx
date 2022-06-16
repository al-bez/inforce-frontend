import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './utils/i18n'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import App from './App'
import store from './redux/store'

const rootElement = document.getElementById('root')
const JSX = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(JSX, rootElement)
} else {
  ReactDOM.render(JSX, rootElement)
}
