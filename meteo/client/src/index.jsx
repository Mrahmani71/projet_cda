import React from 'react'
import { createRoot } from 'react-dom/client' 
import { Provider } from 'react-redux'
import {store} from "./app/store"
import App from './App'


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const startApp = () => {

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

if(window.cordova) {
  document.addEventListener('deviceready', startApp, false)
} else {
  startApp()
}