import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/loader.css'
import {
  RouterProvider,
} from "react-router-dom"
import router from './routes/index.jsx'
import store from './stores'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
