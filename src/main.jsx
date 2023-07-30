import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> //realize doble reenderizado se recomienda solo usarlo en desarrollo
  <>
    <App />
  </>
  // </React.StrictMode>,
)
